import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

data = [{
	title:'Computer Application',
	desc:'These programs are meant for basically those professionals who are already working in technical departments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
	img:'assets/images/ce.jpg',
}];

  constructor() { }

  ngOnInit() {
  }

}
