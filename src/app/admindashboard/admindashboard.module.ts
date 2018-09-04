import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmindashboardComponent } from './admindashboard.component';
import { AdmindashboardRoutingModule } from './admindashboard-routing.module';
import { StudentsComponent } from './students/students.component';
import { StudentsformsComponent } from './students/studentsforms/studentsforms.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { AdmissionsformsComponent } from './admissions/admissionsforms/admissionsforms.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentsformsComponent } from './payments/paymentsforms/paymentsforms.component';
import { ResultsComponent } from './results/results.component';
import { ResultsformsComponent } from './results/resultsforms/resultsforms.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesformsComponent } from './courses/coursesforms/coursesforms.component';
import { CoursescategoryComponent } from './coursescategory/coursescategory.component';
import { CoursessubcategoryComponent } from './coursessubcategory/coursessubcategory.component';

@NgModule({
    imports: [CommonModule, AdmindashboardRoutingModule, FormsModule, ReactiveFormsModule],
    declarations: [ 
        AdmindashboardComponent, 
    	StudentsComponent,
        StudentsformsComponent,
        AdmissionsComponent,
        AdmissionsformsComponent,
    	PaymentsComponent,
        PaymentsformsComponent,
    	ResultsComponent,
        ResultsformsComponent,
    	CoursesComponent,
        CoursesformsComponent,
    	CoursescategoryComponent,
    	CoursessubcategoryComponent
    ]
})
export class AdmindashboardModule {}