import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-get-course',
  templateUrl: './get-course.component.html',
  styleUrls: ['./get-course.component.scss']
})
export class GetCourseComponent implements OnInit {
	@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
