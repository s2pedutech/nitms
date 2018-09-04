import { Component, OnInit ,EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../../../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admissionsforms',
  templateUrl: './admissionsforms.component.html',
  styleUrls: ['./admissionsforms.component.css']
})
export class AdmissionsformsComponent implements OnInit {
	@Output() dat= new EventEmitter<boolean>();
  @Input() mydata: any;
  student = [];
  courses = [];
  subCourse = [];
  courselist = [];
  studentNotEnrolled = [];
  curuid: any;
  name:any;
  curuser: any;
  course: any;
  subcourse: any;
  list: any;
  eno: any;
  enum: any;
  fees: any;
  addate: any;
  admissionForm:FormGroup;
  constructor(public authService: AuthService, public fb: FormBuilder) {
    firebase.database().ref('student/').on('value',stud => {
      this.student=snapshotToArray(stud);
      this.studentNotEnrolled = this.student.filter(x => {
        if(x.isEnroll === "false") return x;
      });
    });
    firebase.database().ref('courses/').on('value',cour => {
      this.courses=snapshotToArray(cour);
    });
    firebase.database().ref('lastEnrollment/').on('value',enroll => {
      this.eno = enroll.val().enum;
    });
    this.admissionForm = this.fb.group({
      name : '',
      course : '',
      subcourse : '',
      list : '',
      enum : ' ',
      fees : '',
      addate : '',
    });
  }
  ngOnInit() {
    this.populateFields(this.mydata);
  }
  changename(curuser){
    if(curuser.isEnroll === "false") {
      this.curuid = curuser.uid;
      this.enum = getNextEnrollmentNo(this.eno);
    }
  }
  changecourse(select){
      this.subCourse = select.subCategory;
  }
  changesubcourse(select){
      this.courselist = select.list;
  }
  populateFields(editdata){
    if(editdata != null){
      //this.name = editdata.name;
      //this.course = editdata.course.catname;
      //this.admissionForm.value.course = editdata.course.catname;

      //this.admissionForm.get('course').value = editdata.course.catname;
      //console.log(this.admissionForm.get('course'));
      
      //this.admissionForm.subcourse = editdata.subcourse.subcatname;
      //this.admissionForm.(this.list) = editdata.list.part;
      this.enum = editdata.enum;
      this.fees = editdata.fees;
      this.addate = editdata.addate;
      console.log(this.name);
      
      var mydata:any = {};
      mydata.name = "abc";  
      mydata.enum = this.enum;
      mydata.course = editdata.course.catname;
      mydata.subcourse = editdata.subcourse.subcatname;
      mydata.list = " a ";
      mydata.fees = this.fees;
      mydata.addate = this.addate;
      console.log(this.admissionForm.value);
      this.admissionForm.setValue(mydata);
      // console.log(this.course);
      // console.log(this.subcourse);
      // console.log(this.list);
    }
  }
  addedit(){
    if(this.mydata === null){
      console.log("admission up called");
      this.admission();
    }else{
      console.log("Edit");
      var u: any = {};
      if(this.course != null) u.course = this.course;              
      if(this.subcourse != null) u.subcourse = this.subcourse;
      if(this.list != null) u.list = this.list;
      if(this.fees != null) u.fees = this.fees;
      if(this.addate != null) u.addate = this.addate;
      var ref1 = "student/";
      ref1 += this.mydata.uid;
      console.log(ref1);
      firebase.database().ref(ref1).update(u);
      alert("Student data Edited !!!");
      this.dat.emit(false);
    }
  }
  admission(){
    var u: any = {};
    u.course = this.course;
    console.log(this.course);                    
    u.subcourse = this.subcourse;
    u.list = this.list;
    u.enum = this.enum;
    u.fees = this.fees;
    u.addate = this.addate;
    u.isEnroll = 'true';
    var ref1 = "student/";
    ref1 += this.curuid;
    console.log(u);
    firebase.database().ref(ref1).update(u);
    var v: any ={};
    v.enum = this.enum;
    firebase.database().ref("/lastEnrollment").update(v);
    alert("Student Successfully Admited !!!");
    this.dat.emit(false);
  }
  Cancel(option:boolean) {
  	this.dat.emit(option);
  } 
}
export const getNextEnrollmentNo = lastnum => {
  console.log(lastnum);
  var s = lastnum.split("/");
  var num = s[2];
  var num1 = Number(num);
  var num2 = num1 + 1;
  var s2 = s[0] + '/' + s[1] + '/' + num2;
  return s2;
};
export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot =>{
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
};