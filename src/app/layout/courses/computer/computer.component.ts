import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../../course.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {
	data : any;
	Comdata: any;
	Cdata = [];
  	constructor(private router : Router, public courseService: CourseService) {
		this.data = this.courseService.getCourses();
		console.log(this.data);
		this.Comdata = this.data[0];
		this.Cdata = this.Comdata.cards;
		console.log(this.Cdata);
   	}
	GoTo(item){
		var d:any = {};
		d.category = this.Comdata.name;
		d.title = item.title;

		this.router.navigate(['/courses/details'],{queryParams: d});
	}
  ngOnInit() { }
}