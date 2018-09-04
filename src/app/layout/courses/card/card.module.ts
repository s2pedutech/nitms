import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card.component';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
    imports: [CommonModule, MatCardModule, CardRoutingModule],
    declarations: [CardComponent]
})

export class CardModule {}