import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { StudentsComponent } from './students.component';
//import { StudentsformsComponent } from './studentsforms/studentsforms.component';

const routes: Routes = [
    //{ path: '', component: StudentsComponent },
 	{ path: 'studentsforms', loadChildren: './studentsforms/studentsforms.module#StudentsformsModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentsRoutingModule {}
