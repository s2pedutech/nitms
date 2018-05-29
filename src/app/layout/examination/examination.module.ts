import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminationRoutingModule } from './examination-routing.module';
import { ExaminationComponent } from './examination.component';

@NgModule({
    imports: [CommonModule, ExaminationRoutingModule],
    declarations: [ExaminationComponent]
})
export class ExaminationModule {}