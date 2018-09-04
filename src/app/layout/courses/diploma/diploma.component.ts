import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../../course.service';

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss']
})
export class DiplomaComponent implements OnInit {
	data : any;
	dipdata: any;
	ddata = [];
	
	// {
	// 	title:'Specialization List',
	// 	list: [{
	// 		name: 'Finance Management'},
	// 		{name: 'Information Technology'},
	// 		{name: 'Customer Care Management'},
	// 		{name: 'International Trade'},
	// 		{name: 'Aviation And Transport'},
	// 		{name: 'Agriculture & Rular'},
	// 		{name: 'Safety Management'},
	// 		{name: 'Risk & Equity'},
	// 		{name: 'Marketing & Sales Management'},
	// 		{name: 'Health Care & Hospital Management'},
	// 		{name: 'Industrial Management'},
	// 		{name: 'Operations Management'},
	// 		{name: 'Law & Property Rights Management'},
	// 		{name: 'Construction & Architectural Management'},
	// 		{name: 'Some More…'}
	// 	],
	// 	desc:'These programs are meant for basically those professionals who are already working in technical departments of the',
	// 	img:'assets/images/sl.jpg',
	// },
	// {
	// 	title:'Diploma Programs (One Year Diploma Course)',
	// 	list: [
	// 		{ name: 'Diploma in Mechanical Engineering'},
	// 		{ name: 'Diploma in Electronics Engineering'},
	// 		{ name: 'Diploma in Electrical Engineering'},
	// 		{ name: 'Diploma in Civil Engineering'},
	// 		{ name: 'Diploma in Chemical Engineering'},
	// 		{ name: 'Diploma in Information Technology'},
	// 		{ name: 'Diploma in Survey Engineering'},
	// 		{ name: 'Diploma in Polymer Science Engineering'},
	// 		{ name: 'Diploma in Industrial Automation Engineering'},
	// 		{ name: 'Diploma in Web Designing'},
	// 	],
	// 	desc:'These programs are meant for basically those professionals who are already working in technical departments of the',
	// 	img:'assets/images/dp.jpg',
	// }];

  constructor(private router : Router, public courseService: CourseService) {
  	this.data = this.courseService.getCourses();
	console.log(this.data);
	this.dipdata = this.data[5];
	this.ddata = this.dipdata.cards;
	console.log(this.data);
  }
  	GoTo(item){
		var d:any = {};
		d.category = this.dipdata.name;
		d.title = item.title;
		this.router.navigate(['/courses/card'],{queryParams: d});
	}
  ngOnInit() {
  }

}
