import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursescategoryComponent } from './coursescategory.component';

const routes: Routes = [
    {
        path: '',
        component: CoursescategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursescategoryRoutingModule {}
