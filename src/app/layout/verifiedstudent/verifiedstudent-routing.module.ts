import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifiedstudentComponent } from './verifiedstudent.component';

const routes: Routes = [
    {
        path: '',
        component: VerifiedstudentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VerifiedstudentRoutingModule {}
