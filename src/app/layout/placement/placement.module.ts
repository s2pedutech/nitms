import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementRoutingModule } from './placement-routing.module';
import { PlacementComponent } from './placement.component';

@NgModule({
    imports: [CommonModule, PlacementRoutingModule],
    declarations: [PlacementComponent]
})
export class PlacementModule {}