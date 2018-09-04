import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
	student = [];
  studentdata = [];
  enroll: any;
  dob: any;
  verifyForm;
  constructor(public router: Router, public fb: FormBuilder) {
  	this.verification();
  }
  verification(){
  	this.verifyForm = this.fb.group({
        enroll: '',
        dob: '',
    });
  }
  verify() {
    // this.authService.login(this.email, this.password);
    firebase.database().ref('student/').on('value',stud => {
      this.student=snapshotToArray(stud);
      this.studentdata = this.student.filter(
        student => student.enum === this.enroll);
        console.log(this.studentdata[0].dob);
        console.log(this.dob);
        if(this.dob === this.studentdata[0].dob){
          this.router.navigate(['/verifiedstudent'], { queryParams: this.studentdata[0] });
        }
    });
  }
  ngOnInit() { }
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