import { Component ,OnInit ,Input } from '@angular/core';
import * as firebase from 'firebase';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
	@Input() data:boolean;
  course = [];
  constructor() {
    firebase.database().ref('courses/').on('value',cour => {
      this.course = snapshotToArray(cour);
      console.log(this.course);
    });
  }

  ngOnInit() {
  }
  Add() {
  	this.data=true;
  }
  cancel() {
  	this.data=false;
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