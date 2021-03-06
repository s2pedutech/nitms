import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'placement', loadChildren: './placement/placement.module#PlacementModule'},
            { path: 'certification', loadChildren: './certification/certification.module#CertificationModule'},
            { path: 'examination', loadChildren: './examination/examination.module#ExaminationModule'},
            { path: 'accrediation', loadChildren: './accrediation/accrediation.module#AccrediationModule'},
            { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusModule'},
            { path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
            { path: 'courses', loadChildren: './courses/courses.module#CoursesModule'},
            { path: 'account', loadChildren: './account/account.module#AccountModule'},
            { path: 'verifiedstudent', loadChildren: './verifiedstudent/verifiedstudent.module#VerifiedstudentModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
