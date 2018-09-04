import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursedetailsComponent } from './coursedetails.component';

const routes: Routes = [
    {
        path: '',
        component: CoursedetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursedetailsRoutingModule {}
