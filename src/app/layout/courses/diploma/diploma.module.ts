import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DiplomaComponent } from './diploma.component';
import { DiplomaRoutingModule } from './diploma-routing.module';
//import { CardComponent } from '../card/card.component';

@NgModule({
    imports: [CommonModule, MatCardModule, DiplomaRoutingModule],
    declarations: [DiplomaComponent]
})

export class DiplomaModule {}