import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextileEComponent } from './textile-e.component';

const routes: Routes = [
    {
        path: '',
        component: TextileEComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TextileERoutingModule {}
