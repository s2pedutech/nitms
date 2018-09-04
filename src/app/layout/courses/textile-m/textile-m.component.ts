import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CourseService } from '../../../course.service';

@Component({
  selector: 'app-textile-m',
  templateUrl: './textile-m.component.html',
  styleUrls: ['./textile-m.component.scss']
})
export class TextileMComponent implements OnInit {
	Comdata : any;
	data : any;
	tmdata = [];
	// tmdata = [{
	// 	title:'Textile Management Programs',
	// 	list: [
	// 		{name: 'Diploma in Textile Management'},
	// 		{name: 'Bachelors Program in Textile Management'},
	// 		{name: 'Master in Textile Management'}
	// 	],
	// 	desc:'These programs are meant for basically those professionals who are already working in technical departments of the ',
	// 	img:'assets/images/tm.jpg',
	// }];
  	constructor(private router : Router, public courseService: CourseService) {
  		this.data = this.courseService.getCourses();
		console.log(this.data);
		this.Comdata = this.data[3];
		this.tmdata = this.Comdata.cards;
		console.log(this.tmdata);
  	}
  	GoTo(item){
		var d:any = {};
		d.category = this.Comdata.name;
		d.title = item.title;
		this.router.navigate(['/courses/details'],{queryParams: d});
	}
  ngOnInit() { }
}