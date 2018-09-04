import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CourseService } from '../../../course.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
	Comdata : any;
	data : any;
	mdata = [];
  constructor(private router : Router, public courseService: CourseService) {
  		this.data = this.courseService.getCourses();
		console.log(this.data);
		this.Comdata = this.data[4];
		this.mdata = this.Comdata.cards;
		console.log(this.mdata);
  	}
  	GoTo(item){
		var d:any = {};
		d.category = this.Comdata.name;
		d.title = item.title;
		this.router.navigate(['/courses/details'],{queryParams: d});
	}
  ngOnInit() {
  }

}
