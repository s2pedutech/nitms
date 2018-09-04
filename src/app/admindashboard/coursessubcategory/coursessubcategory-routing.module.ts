import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursessubcategoryComponent } from './coursessubcategory.component';

const routes: Routes = [
    {
        path: '',
        component: CoursessubcategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursessubcategoryRoutingModule {}
