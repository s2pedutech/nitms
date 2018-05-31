import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-textile-e',
  templateUrl: './textile-e.component.html',
  styleUrls: ['./textile-e.component.scss']
})
export class TextileEComponent implements OnInit {

data = [{
	title:'Textile Engineering',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the',
	img:'assets/images/te.jpg',
}];

  constructor() { }

  ngOnInit() {
  }

}
