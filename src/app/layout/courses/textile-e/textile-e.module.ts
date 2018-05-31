import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TextileEComponent } from './textile-e.component';
import { TextileERoutingModule } from './textile-e-routing.module';
import { CardComponent } from '../card/card.component';



@NgModule({
    imports: [CommonModule,MatCardModule,TextileERoutingModule],
    declarations: [TextileEComponent,CardComponent]
})

export class TextileEModule {}