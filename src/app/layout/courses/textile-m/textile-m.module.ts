import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TextileMComponent } from './textile-m.component';
import { TextileMRoutingModule } from './textile-m-routing.module';
import { CardComponent } from '../card/card.component';



@NgModule({
    imports: [CommonModule,MatCardModule,TextileMRoutingModule],
    declarations: [TextileMComponent,CardComponent]
})

export class TextileMModule {}