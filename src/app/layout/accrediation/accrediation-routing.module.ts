import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccrediationComponent } from './accrediation.component';

const routes: Routes = [
    {
        path: '',
        component: AccrediationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccrediationRoutingModule {}
