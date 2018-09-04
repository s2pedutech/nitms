import { Component, OnInit ,EventEmitter ,Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../../../auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-coursesforms',
  templateUrl: './coursesforms.component.html',
  styleUrls: ['./coursesforms.component.css']
})
export class CoursesformsComponent implements OnInit {
	@Output() dat = new EventEmitter<boolean>() ;
  short: any;
  full: any;
  category: any;
  subcategory: any;
  duration: any;
  fees: any;
  description: any;
  courseForm;
  course = [];
  constructor(public authService: AuthService, public fb: FormBuilder) {
    firebase.database().ref('courses/').on('value',cour => {
      this.course = snapshotToArray(cour);
      console.log(this.course);
    });
    this.courseForm = this.fb.group({
      short: '',
      full: '',
      category: '',
      subcategory: '',
      duration: '',
      fees: '',
      description: '',
    });
  }
  ngOnInit() { }
  addCourse(){
    var u: any = {};
    u.short=this.short;
    u.full=this.full;
    u.category=this.category;
    u.subcategory=this.subcategory;
    u.duration=this.duration;
    u.fees=this.fees;
    u.description=this.description;
    //console.log(u);
    firebase.database().ref('/courses').push(u);

  }
  Cancel(option:boolean) {
  	this.dat.emit(option);
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