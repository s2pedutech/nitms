import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';
import { Upload } from './upload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  student = [];
  nitms = [];
  uid: any; 
  studentdata: any[];
  data = [];
  imageurl : string = " ";
  userid : string;
	user: Observable<firebase.User>;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
  	this.user = firebaseAuth.authState;
  	var user1 = firebase.auth().currentUser;	
  }
  pushUpload(upload: Upload, data:any) {
    let storageRef = firebase.storage().ref();
    var metadata = {
      'contentType': 'image/png'
    };
    var filename = "/student/";
    filename += this.userid + "/";
    var filename2 = upload.name;
    filename += filename2;
    console.log(filename);
    var x = storageRef.child(filename).put(upload);
    console.log("after put");
    x.on(firebase.storage.TaskEvent.STATE_CHANGED, re => {
      console.log(re);
    }, err => {
      console.log(err);
    }, () => {
      storageRef.child(filename).getDownloadURL().then( m => { 
        this.imageurl = m; 
        console.log(this.imageurl);
        data.img= this.imageurl;
        console.log(data);
        firebase.database().ref('/student').child(this.userid).set(data);
        alert("Student Successfully Registered !!!");
      });
    });
  }
  // load(){
  //   this.imageurl = "https://firebasestorage.googleapis.com/v0/b/nitms-84ab3.appspot.com/o/student%2Fnitmslogo.png?alt=media&token=c968934a-5ed2-471c-8140-ffd1c40ab844";
  // }
  signUp(email: string, password: string, file:any, data: any) {
    email += "@gmail.com";
    this.firebaseAuth.auth
    .createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Success!', value);
      var user2 = firebase.auth().currentUser;
      this.userid = user2.uid;
      data.uid= user2.uid;
      data.img = this.pushUpload(file, data);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
      alert("Something went wrong Please fill the form properly ");
    });    
  }
  edit1(uid:any, data: any){
    console.log("in edit without file");
    var ref1 = "student/";
    ref1 += uid;
    firebase.database().ref(ref1).update(data);
    alert("Student data Edited !!!");
  }
  edit(upload: Upload, uid:any, data: any){
    console.log(upload);
    let storageRef = firebase.storage().ref();
    var metadata = {
      'contentType': 'image/png'
    };
    var filename = "/student/";
    filename += uid + "/";
    var filename2 = upload.name;
    filename += filename2;
    console.log(filename);
    var x = storageRef.child(filename).put(upload);
    console.log("after put");
    x.on(firebase.storage.TaskEvent.STATE_CHANGED, re => {
      console.log(re);
    }, err => {
      console.log(err);
    }, () => {
      storageRef.child(filename).getDownloadURL().then( m => { 
        this.imageurl = m; 
        console.log(this.imageurl);
        data.img= this.imageurl;
        console.log(data);
        var ref1 = "student/";
        ref1 += uid;
        firebase.database().ref(ref1).update(data);
        alert("Student data Edited !!!");
      });
    });
  }
  login(email: string, password: string) {
    email += "@gmail.com";
  	console.log(email);
    this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      console.log(value.user.uid);
      this.student = [];
      this.studentdata = [];
      firebase.database().ref('admin/').on('value',stud => {
        this.student = snapshotToArray(stud);
        this.studentdata = this.student.filter(
        student => student.uid === value.user.uid);
        this.data = this.studentdata[0];
        if(this.data){
          this.router.navigate(['/admindashboard']);
        }else{
          this.router.navigate(['/account']);
        }
      });
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
  }
}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot =>{
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
};