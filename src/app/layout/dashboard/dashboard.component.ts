import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public sliders: Array<any> = [];

    data = [{'name': 'ALL MANAGEMENT PROGRAMS'},
            {'name': 'ALL TECHNICAL PROGRAMS'},
            {'name': 'ALL DIPLOMA & SPECIALIZATION PROGRAMS'}
    ];
    constructor() {
        this.sliders.push({
            imagePath: 'assets/images/banner03.jpg',
            label: 'First slide label'
        },{
            imagePath: 'assets/images/banner06.jpg',
            label: 'Second slide label'
        },{
            imagePath: 'assets/images/banner07.jpg',
            label: 'Third slide label'
        });
    }
    ngOnInit() { }
}
