import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../../../auth.service';
import * as firebase from 'firebase/app';
import { Upload } from '../../.././upload';

@Component({
  selector: 'app-resultsforms',
  templateUrl: './resultsforms.component.html',
  styleUrls: ['./resultsforms.component.css']
})
export class ResultsformsComponent implements OnInit {
	@Output() dat = new EventEmitter<boolean>();
  student = [];
  results = [];
  curuid;
  name: any;
  part: any;
  sem1date: any;
  sem2date: any;
  sem3date: any;
  sem4date: any;
  sem5date: any;
  sem6date: any;
  sem7date: any;
  sem8date: any;
  sem1result: any;
  sem2result: any;
  sem3result: any;
  sem4result: any;
  sem5result: any;
  sem6result: any;
  sem7result: any;
  sem8result: any;
  cerdate: any;
  certificate: any;
  resultForm;
  constructor(public authService: AuthService, public fb: FormBuilder) {
    firebase.database().ref('student/').on('value',stud => {
      this.student=snapshotToArray(stud);
    });
    this.resultForm = this.fb.group({
      name: '',
      sem1date: '',
      sem2date: '',
      sem3date: '',
      sem4date: '',
      sem5date: '',
      sem6date: '',
      sem7date: '',
      sem8date: '',
      cerdate: ''
    });
  }
  ngOnInit() { }
  changename(curuid) {
    console.log(curuid);
    this.curuid=curuid;
    var mystr = "student/" + this.curuid + "/results/";
    console.log(mystr);
    var resref = firebase.database().ref(mystr);
    resref.on('value', resp => {
      this.results = snapshotToArray(resp);
      console.log(this.results);
    });
    this.student.filter(x => {
      if(x.uid === this.curuid){
        this.part = x.list.part;
        for(var i=0; i<this.results.length; i++){
          if(this.results[i].sem == "sem1") {
            this.sem1date = this.results[i].date;
            this.sem1result = this.results[i].img;
          } 
          else 
          if(this.results[i].sem == "sem2") {
            this.sem2date = this.results[i].date;
            this.sem2result = this.results[i].img;
          } 
          else 
          if(this.results[i].sem == "sem3") {
            this.sem3date = this.results[i].date;
            this.sem3result = this.results[i].img;
          } 
          else
          if(this.results[i].sem == "sem4") {
            this.sem4date = this.results[i].date;
            this.sem4result = this.results[i].img;
          }
          else 
          if(this.results[i].sem == "sem5") {
            this.sem5date = this.results[i].date;
            this.sem5result = this.results[i].img;
          }
          else
          if(this.results[i].sem == "sem6") {
            this.sem6date = this.results[i].date;
            this.sem6result = this.results[i].img;
          }
          else
          if(this.results[i].sem == "sem7") {
            this.sem7date = this.results[i].date;
            this.sem7result = this.results[i].img;
          }
          else 
          if(this.results[i].sem == "sem8") {
            this.sem8date = this.results[i].date;
            this.sem8result = this.results[i].img;
          }
        }
      }
    });
  }
  onChange(event, date, sem) {
    console.log(date);
    this.pushUpload(event.srcElement.files[0],date,sem);
    console.log(event.srcElement.files[0]);
  }
  pushUpload(upload: Upload, date, sem) {
    var storageRef = firebase.storage().ref();
    var metadata = {
      'contentType': 'image/png'
    };
    var filename = "/student/";
    filename += this.curuid + "/";
    var filename2 = sem;
    filename += filename2;
    console.log(filename);
    var x = storageRef.child(filename).put(upload);
    console.log("after put");
    x.on(firebase.storage.TaskEvent.STATE_CHANGED, re => {
      console.log(re);
      //var percent = re.bytesTransferred / re.totalBytes * 100;
      //console.log(percent + "% done");
    }, err => {
      console.log(err);
    }, () => {
      storageRef.child(filename).getDownloadURL().then( m => { 
        var flag = 0;
        console.log(m);
        //alert(m);
        // check if the sem exists in the array
        for(var i=0; i < this.results.length; i++) {
          if(this.results[i].sem == sem) {
            this.results[i].img = m;
            flag = 1;
            break;
          }
        }
        if(flag == 0){
          var obj:any = {};
          obj.sem = sem;
          obj.img = m;
          obj.date = date;
          this.results.push(obj);
        }
      });
    });
    console.log(this.results);
  }
  getcertificate(event) {
    this.pushCertificate(event.srcElement.files[0]);
  }
  pushCertificate(upload: Upload) {
    let storageRef = firebase.storage().ref();
    var metadata = {
      'contentType': 'image/png'
    };
    var filename = "/student/";
    filename += this.curuid + "/";
    var filename2 = upload.name;
    filename += filename2;
    console.log(filename);
    var x = storageRef.child(filename).put(upload);
    console.log("after put");
    x.on(firebase.storage.TaskEvent.STATE_CHANGED, re => {
      console.log(re);
      //var percent = re.bytesTransferred / re.totalBytes * 100;
      //console.log(percent + "% done");
    }, err => {
      console.log(err);
    }, () => {
      storageRef.child(filename).getDownloadURL().then( m => {
        this.certificate = m;
      });
    });
  }
  addResult(){
    for(var i=0; i < this.results.length; i++)
    {
      if(this.results[i].sem == "sem1")
      {
        this.results[i].date = this.sem1date;
      }
      else
      if(this.results[i].sem == "sem2")
      {
        this.results[i].date = this.sem2date;
      }
      else
      if(this.results[i].sem == "sem3")
      {
        this.results[i].date = this.sem3date;
      }
      else
      if(this.results[i].sem == "sem4")
      {
        this.results[i].date = this.sem4date;
      }
      else
      if(this.results[i].sem == "sem5")
      {
        this.results[i].date = this.sem5date;
      }
      else
      if(this.results[i].sem == "sem6")
      {
        this.results[i].date = this.sem6date;
      }
      else
      if(this.results[i].sem == "sem7")
      {
        this.results[i].date = this.sem7date;
      }
      else
      if(this.results[i].sem == "sem8")
      {
        this.results[i].date = this.sem8date;
      }
    }
    var ref1 = "student/";
    ref1 += this.curuid;
    console.log(ref1);

    firebase.database().ref(ref1).child('results').update(this.results);
    if(this.cerdate != null && this.certificate != ""){
      var u: any = {};
      u.certificatedate = this.cerdate;
      u.certificate = this.certificate;
      console.log(u);
      firebase.database().ref(ref1).child('certificate').update(u);
    }
    alert("Results Successfully Added !!!");
    this.dat.emit(false);
  }
  Cancel(option:boolean){
  	this.dat.emit(option);
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