import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-verifiedstudent',
  templateUrl: './verifiedstudent.component.html',
  styleUrls: ['./verifiedstudent.component.scss']
})
export class VerifiedstudentComponent implements OnInit {
	student = [];
	studentdata;
  data;
  uid: any;
  constructor(private route: ActivatedRoute) {
	 this.route.queryParams.subscribe(value => {
	   console.log(value);
	   this.uid = value.uid;
	 });
  	console.log(this.uid);
  	firebase.database().ref('student/').on('value',stud => {
  		this.student = snapshotToArray(stud);
  		console.log(this.uid);
  		this.studentdata = this.student.filter(
  			student => student.uid === this.uid );
      	this.data = this.studentdata[0];
      	console.log(this.data);
  	});
  }
  ngOnInit() {  }	
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