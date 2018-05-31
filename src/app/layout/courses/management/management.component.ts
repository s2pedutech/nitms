import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

data = [{
	title:'Management Programs',
	desc:'Management courses that we offer are highly compatible with International standards. ',
},
{
	title:'Professional Management Programs',
	desc:'Professional courses that we offer come with a real & holistic approach for the professionals already working in the',
	img:'assets/images/pm1.jpg',
},
{
	title:'Executive Management Programs',
	desc:'Executive Management courses come with a specific approach towards the professionals who are working with a specific ',
	img:'assets/images/em.jpg',
},
{
	title:'Diploma Programs (Six Months Diploma Course)',
	img:'assets/images/dm.jpg',
}];

  constructor() { }

  ngOnInit() {
  }

}
