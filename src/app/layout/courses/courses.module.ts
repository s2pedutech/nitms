import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

@NgModule({
    imports: [
        CommonModule,
        CoursesRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [CoursesComponent]
})
export class CoursesModule {}