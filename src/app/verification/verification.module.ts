import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationRoutingModule } from './verification-routing.module';
import { VerificationComponent } from './verification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, VerificationRoutingModule, FormsModule, ReactiveFormsModule],
    declarations: [VerificationComponent]
})
export class VerificationModule { }