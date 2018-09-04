import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
	@Input() data: boolean;
  student = [];
  editStudent = [];
  constructor(private router : Router) {
    firebase.database().ref('student/').on('value',stud => {
      this.student = snapshotToArray(stud);
      console.log(this.student);
    });
  }
  ngOnInit() {
  }
  display(status){
    if(status == 1){
      return "Active";
    }else{
      return "Inactive";
    }
  }
  Add(){
  	this.data=true;
  }
  cancel(){
		this.data = false;
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