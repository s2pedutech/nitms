import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EngineeringRoutingModule } from './engineering-routing.module';
//import { CardComponent } from '../card/card.component';
import { EngineeringComponent } from './engineering.component';


@NgModule({
    imports: [CommonModule, MatCardModule,EngineeringRoutingModule],
    declarations: [EngineeringComponent]
})

export class EngineeringModule {}