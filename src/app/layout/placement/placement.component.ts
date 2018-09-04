import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({ 
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.scss']
})
export class PlacementComponent implements OnInit {
	placement = [];
	nitms = [];
	
  constructor( public router: Router ) { 
  	this.placement = [];
  	firebase.database().ref('company/').on('value', place => {
  		console.log(place);
  		this.placement = snapshotToArray(place);
  	});
  }
  ngOnInit() { }
}
export const snapshotToArray = snapshot => {
	let returnArr = [];
	snapshot.forEach(childSnapshot =>{
		let item = childSnapshot.val();
		item.key = childSnapshot.key;
		returnArr.push(item);
	});

	return returnArr;
};