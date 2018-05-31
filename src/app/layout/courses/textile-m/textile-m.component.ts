import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-textile-m',
  templateUrl: './textile-m.component.html',
  styleUrls: ['./textile-m.component.scss']
})
export class TextileMComponent implements OnInit {

data = [{
	title:'Textile Management Programs',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the ',
	img:'assets/images/tm.jpg',
}];

  constructor() { }

  ngOnInit() {
  }

}
