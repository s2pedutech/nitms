import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
    imports: [CommonModule, MatCardModule,DetailsRoutingModule],
    declarations: [DetailsComponent]
})

export class DetailsModule {}