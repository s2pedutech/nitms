import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    { path: '', component: AdminComponent},
    //{ path: 'admindashboard', loadChildren: './admindashboard/admindashboard.module#AdmindashboardModule'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
