import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentosComponent } from './departamentos.component';

export const routes = [
  { path: '', component: DepartamentosComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DepartamentosComponent],
  bootstrap: [DepartamentosComponent]
})
export class DepartamentosModule { }
