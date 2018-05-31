import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccrediationRoutingModule } from './accrediation-routing.module';
import { AccrediationComponent } from './accrediation.component';

@NgModule({
    imports: [CommonModule, AccrediationRoutingModule],
    declarations: [AccrediationComponent]
})
export class AccrediationModule {}