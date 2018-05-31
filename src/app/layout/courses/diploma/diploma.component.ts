import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss']
})
export class DiplomaComponent implements OnInit {

data = [{
	title:'Diploma Programs (Six Months Diploma Courses)',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the corporate sector.',
	img:'assets/images/dm.jpg',
},
{
	title:'Specialization List',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the',
	img:'assets/images/sl.jpg',
},
{
	title:'Diploma Programs (One Year Diploma Course)',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the',
	img:'assets/images/dp.jpg',
}];


  constructor() { }

  ngOnInit() {
  }

}
