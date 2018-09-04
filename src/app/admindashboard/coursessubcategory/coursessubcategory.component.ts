import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-coursessubcategory',
  templateUrl: './coursessubcategory.component.html',
  styleUrls: ['./coursessubcategory.component.scss']
})
export class CoursessubcategoryComponent implements OnInit {
	course = [];
  constructor() {
  	firebase.database().ref('courses/').on('value',cour => {
  		this.course = snapshotToArray(cour);
      	//console.log(this.course[0].subCategory);
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