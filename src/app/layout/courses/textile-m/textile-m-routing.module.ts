import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextileMComponent } from './textile-m.component';

const routes: Routes = [
    {
        path: '',
        component: TextileMComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TextileMRoutingModule {}
