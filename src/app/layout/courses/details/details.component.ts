import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../course.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
	data :any;
	category : any;
	title : any;
	cards  = [];
	carddata: any;
  	constructor( private route : ActivatedRoute, public courseService: CourseService) {
		this.route.queryParams.subscribe(params => {
			//this.data = params;
			console.log(params);
			this.category = params.category;
			this.title = params.title;
		});
		this.data = this.courseService.getCourses();
		console.log(this.data);

		this.data.filter(x => {
			if(x.name === this.category)
				this.cards = x.cards;
		});
		this.cards.filter(y => {
			if(y.title === this.title)
				this.carddata = y;
		});
		console.log(this.carddata);
   	}
  ngOnInit() { }
}