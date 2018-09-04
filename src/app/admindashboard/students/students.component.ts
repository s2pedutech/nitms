import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
	@Input() data: boolean;
	student = [];
  mydata = {};
  constructor(private router : Router) {
  	firebase.database().ref('student/').on('value',stud => {
  		this.student = snapshotToArray(stud);
      console.log(this.student);
  	});
  }
  ngOnInit() { }
  display(status){
  	if(status == 1){
  		return "Active";
  	}else{
  		return "Inactive";
  	}
  }
  edit(a){
    console.log(a);
    this.data = true;
    this.mydata = a;
    console.log(this.mydata);
  }
	// Add(){
	// 	this.data = true;
	// }
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