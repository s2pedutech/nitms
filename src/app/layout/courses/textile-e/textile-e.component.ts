import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CourseService } from '../../../course.service';

@Component({
  selector: 'app-textile-e',
  templateUrl: './textile-e.component.html',
  styleUrls: ['./textile-e.component.scss']
})
export class TextileEComponent implements OnInit {
	Comdata : any;
	data : any;
	tedata = [];
  	constructor(private router : Router, public courseService: CourseService) { 
		this.data = this.courseService.getCourses();
		console.log(this.data);
		this.Comdata = this.data[2];
		this.tedata = this.Comdata.cards;
		console.log(this.tedata);
  	}
  	GoTo(item){
		var d:any = {};
		d.category = this.Comdata.name;
		d.title = item.title;
		this.router.navigate(['/courses/details'],{queryParams: d});
	}
  ngOnInit() { }
}
