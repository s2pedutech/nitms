import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { VerifiedstudentRoutingModule } from './verifiedstudent-routing.module';
import { VerifiedstudentComponent } from './verifiedstudent.component';

@NgModule({
    imports: [CommonModule, VerifiedstudentRoutingModule, NgbModule.forRoot()
],
    declarations: [VerifiedstudentComponent]
})
export class VerifiedstudentModule {}