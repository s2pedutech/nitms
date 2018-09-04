import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    a:boolean=false;

  	// isGallery: boolean;
  	// isStaff: boolean;
  	isStudents: boolean;
  	isAdmissions: boolean;
  	isPayments: boolean;
  	isResults: boolean;
  	isCourses: boolean;
  	isCoursescategory: boolean;
  	isCoursessubcategory: boolean;
  	// isPages: boolean;

  	makeFalse() {
  		// this.isGallery = false;
  		// this.isStaff = false;
  		this.isStudents = false;
  		this.isAdmissions = false;
  		this.isPayments = false;
  		this.isResults = false;
  		this.isCourses = false;
  		this.isCoursescategory = false;
  		this.isCoursessubcategory = false;
  		// this.isPages = false;
  	}
  	display(value){
 		this.makeFalse();
 		// if(value === 'gallery'){
  	// 		this.isGallery = true;
 		// }else if(value === 'staff'){
 		// 	this.isStaff = true;
 		// }else 
    if(value === 'students'){
 			this.isStudents = true;
 		}else if(value === 'admissions'){
 			this.isAdmissions = true;
 		}else if(value === 'payments'){
 			this.isPayments = true;
 		}else if(value === 'results'){
 			this.isResults = true;
 		}else if(value === 'courses'){
 			this.isCourses = true;
 		}else if(value === 'coursescategory'){
 			this.isCoursescategory = true;
 		}else if(value === 'coursessubcategory'){
 			this.isCoursessubcategory = true;
 		// }else if(value === 'pages'){
 		// 	this.isPages = true;
 		}
	}
}