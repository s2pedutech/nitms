import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
	student = [];
	nitms = [];
  user; 
  uid; 
  studentdata = [];
  data = [];
  result = [];
  date = [];
  resultDate =[];
  constructor(){
    this.user = firebase.auth().currentUser;
    console.log(this.user.uid);
  	this.uid = this.user.uid;
    // this.student = [];
    // this.studentdata = [];
  	firebase.database().ref('student/').on('value',stud => {
  		this.student = snapshotToArray(stud);
      this.studentdata = this.student.filter(
        student => student.uid === this.uid );
      this.data = this.studentdata[0];
      console.log(this.data);
      // this.resultDate.push(this.data.resultDate);
      // console.log(this.resultDate[0]);
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