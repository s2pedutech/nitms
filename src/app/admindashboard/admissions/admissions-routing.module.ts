import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionsComponent } from './admissions.component';

const routes: Routes = [
    {
        path: '',
        component: AdmissionsComponent
    },

    { path: 'admissionsforms', loadChildren: './admissionsforms/admissionsforms.module#AdmissionsformsModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdmissionsRoutingModule {}
