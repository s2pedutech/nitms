import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';

@NgModule({
    imports: [CommonModule, AccountRoutingModule,         NgbModule.forRoot()
],
    declarations: [AccountComponent]
})
export class AccountModule {}