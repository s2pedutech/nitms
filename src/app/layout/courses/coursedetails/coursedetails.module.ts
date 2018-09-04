import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
//import { CoursedetailsRoutingModule } from './coursedetails.module';
//import { CardComponent } from '../card/card.component';
import { CoursedetailsComponent } from './coursedetails.component';


@NgModule({
    imports: [CommonModule, MatCardModule],
    declarations: [CoursedetailsComponent]
})

export class CoursedetailsModule {}