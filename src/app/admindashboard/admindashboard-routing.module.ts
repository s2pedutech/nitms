import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard.component';

const routes: Routes = [
    { path: '', component: AdmindashboardComponent },
    { path: 'students', loadChildren: './students/students.module#StudentsModule' },
    { path: 'admissions', loadChildren: './admissions/admissions.module#AdmissionsModule' }  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdmindashboardRoutingModule {}
