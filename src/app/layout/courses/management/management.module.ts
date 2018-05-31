import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ManagementComponent } from './management.component';
import { ManagementRoutingModule } from './management-routing.module';
import { CardComponent } from '../card/card.component';



@NgModule({
    imports: [CommonModule,MatCardModule,ManagementRoutingModule],
    declarations: [ManagementComponent,CardComponent]
 })

export class ManagementModule {}