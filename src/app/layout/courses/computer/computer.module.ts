import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ComputerComponent } from './computer.component';
import { ComputerRoutingModule } from './computer-routing.module';

@NgModule({
    imports: [CommonModule, MatCardModule, ComputerRoutingModule],
    declarations: [ComputerComponent]
})

export class ComputerModule {}