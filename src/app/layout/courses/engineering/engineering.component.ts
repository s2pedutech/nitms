import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CourseService } from '../../../course.service';

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.scss']
})
export class EngineeringComponent implements OnInit {
  Comdata : any;
  data : any;
	//@Input edata : any;
  edata = [];
  constructor(private router : Router, public courseService: CourseService) {
  this.data = this.courseService.getCourses();
		console.log(this.data);
		this.Comdata = this.data[1];
		this.edata = this.Comdata.cards;
		console.log(this.edata);
  }
  GoTo(item){
		var d:any = {};
		d.category = this.Comdata.name;
		d.title = item.title;
		this.router.navigate(['/courses/details'],{queryParams: d});
	}
  ngOnInit() { }
}