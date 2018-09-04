import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../../../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-studentsforms',
  templateUrl: './studentsforms.component.html',
  styleUrls: ['./studentsforms.component.scss']
})
export class StudentsformsComponent implements OnInit {
	@Output() dat = new EventEmitter<boolean>();
  @Input() mydata: any;
  //editdata: any;
  name: any;
  dob: any;
  gender: any;
  mobno: any; 
  amobno: any;
  email: any;
  uname: any;
  password: any;
  paddress: any;
  description: any;
  status: any;
  files: any;
  signupForm;
  constructor(public authService: AuthService, public fb: FormBuilder) { 
    this.signupForm = this.fb.group({
      name:'',
      dob: '',
      gender:'', 
      mobno:'',  
      amobno:'', 
      email: '',
      uname: '',
      password: '',
      paddress: '',
      description:'', 
      status:'',
    });
  }
  ngOnInit() {
    //console.log(this.mydata);
    this.populateFields(this.mydata);
  }
  populateFields(editdata){
    if(editdata != null){
      this.name = editdata.name;
      this.dob = editdata.dob;
      this.gender = editdata.gender;
      this.mobno = editdata.mobno;
      this.amobno = editdata.amobile;
      this.email = editdata.email;
      this.uname = editdata.uname;
      this.files = editdata.img;
      this.password = editdata.password;
      this.paddress = editdata.paddress;
      this.description = editdata.description;
      this.status = editdata.status;
    }
  }
  addedit(){
    if(this.mydata === null){
      console.log("sign up called");
      this.signup();
    }else{
      console.log("Edit");
      var u: any = {};
      if(this.name!= null){
        u.name= this.name;
      }
      if(this.dob!= null){
        u.dob= this.dob;
      }
      if(this.gender!= null){
        u.gender=this.gender;
      }
      if(this.mobno!= null){
        u.mobno=this.mobno;
      }
      if(this.amobno!= null){
        u.amobile=this.amobno;
      }
      if(this.email!= null){
        u.email=this.email;
      }
      if(this.paddress!= null){
        u.paddress=this.paddress;
      }
      if(this.description!= null){
        u.description=this.description;
      }
      if(this.status!= null){
        u.status=this.status;
      }
      // var ref1 = "student/";
      // ref1 += this.mydata.curuid;
      // firebase.database().ref(ref1).update(u);
      // alert("Student data Edited !!!");
      console.log(this.files.name);
      if(this.files.name === undefined){
        console.log("without image");
        this.authService.edit1(this.mydata.uid, u);
        this.dat.emit(false);
      }else{
        this.authService.edit(this.files, this.mydata.uid, u);
        this.dat.emit(false);
      }
    }
  }
  onChange(event) {
    this.files = event.srcElement.files[0];
  }
  signup() {
    var u: any = {};
    if(this.name!= null){
      u.name= this.name;
    }else{
      u.name= '';
    }
    if(this.dob!= null){
      u.dob= this.dob;
    }else{
      u.dob= '';
    }
    if(this.gender!= null){
      u.gender=this.gender;
    }else{
      u.gender= '';
    }
    if(this.mobno!= null){
      u.mobno=this.mobno;
    }else{
      u.mobno= '';
    }
    if(this.amobno!= null){
      u.amobile=this.amobno;
    }else{
      u.amobno= '';
    }
    if(this.uname!= null){
      u.uname=this.uname;
    }else{
      u.uname= '';
    }
    if(this.email!= null){
      u.email=this.email;
    }else{
      u.email= '';
    }
    if(this.paddress!= null){
      u.paddress=this.paddress;
    }else{
      u.paddress= '';
    }
    if(this.description!= null){
      u.description=this.description;
    }else{
      u.description= '';
    }
    if(this.status!= null){
      u.status=this.status;
    }else{
      u.status= '';
    }
    // if(this.files == null  && this.files != " "){
    //   this.files = "https://firebasestorage.googleapis.com/v0/b/nitms-84ab3.appspot.com/o/student%2Fnitmslogo.png?alt=media&token=c968934a-5ed2-471c-8140-ffd1c40ab844";
    // }
    u.isEnroll= 'false';
    if(this.name != null){
      this.authService.signUp(this.uname, this.password, this.files, u);
      this.dat.emit(false);
    }else{
      alert("Please Enter Proper Name");
      this.dat.emit(false);
    }
  }
  Cancel(option:boolean) {
		this.dat.emit(option);
	}
}