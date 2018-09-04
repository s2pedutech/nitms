import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-coursescategory',
  templateUrl: './coursescategory.component.html',
  styleUrls: ['./coursescategory.component.scss']
})
export class CoursescategoryComponent implements OnInit {
	course = [];
  constructor() {
  	firebase.database().ref('courses/').on('value',cour => {
  		this.course = snapshotToArray(cour);
      console.log(this.course);
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