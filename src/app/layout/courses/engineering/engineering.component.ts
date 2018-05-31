import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.scss']
})
export class EngineeringComponent implements OnInit {

	data = [{
	title:'Mechanical Engineering',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
	img:'assets/images/me.jpg',
},
{
	title:'Electronics & Telecommunication Engineering',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
	img:'assets/images/etc.jpg',
},
{
	title:'Electrical Engineering',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
	img:'assets/images/ee.jpg',
},
{
	title:'Automobile Engineering',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
	img:'assets/images/ae.jpg',
},
{
	title:'Civil Engineering',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
	img:'assets/images/cv.jpg',
},
{
	title:'Instrumentation & Control Engineering',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
	img:'assets/images/ie.jpg',
},
{
	title:'Chemical Engineering',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
	img:'assets/images/ch.jpg',
},
{
	title:'Information Technology',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
	img:'assets/images/it.jpg',
}];

  constructor() { }

  ngOnInit() {
  }

}
