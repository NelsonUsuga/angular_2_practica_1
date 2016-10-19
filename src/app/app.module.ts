import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';

import { DepartamentosModule } from './departamentos/departamentos.module';


export const routes = [
  { path: '', component: Componente1Component, pathMatch: 'full' },
  { path: '/departamentos', module: DepartamentosModule, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DepartamentosModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
