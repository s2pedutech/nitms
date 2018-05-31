import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
    {
        path: '',
        component: CoursesComponent,
        children: [
            /*{ path: '', redirectTo: 'courses' },*/
            { path: 'computer', loadChildren: './computer/computer.module#ComputerModule'},
            { path: 'diploma', loadChildren: './diploma/diploma.module#DiplomaModule'},
            { path: 'engineering', loadChildren: './engineering/engineering.module#EngineeringModule'},
            { path: 'management', loadChildren: './management/management.module#ManagementModule'},
            { path: 'textile-e', loadChildren: './textile-e/textile-e.module#TextileEModule'},
            { path: 'textile-m', loadChildren: './textile-m/textile-m.module#TextileMModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule {}
