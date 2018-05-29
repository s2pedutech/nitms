import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationRoutingModule } from './certification-routing.module';
import { CertificationComponent } from './certification.component';

@NgModule({
    imports: [CommonModule, CertificationRoutingModule],
    declarations: [CertificationComponent]
})
export class CertificationModule {}