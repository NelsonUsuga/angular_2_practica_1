import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { Servicio1Service } from './servicios/servicio1.service';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    DepartamentosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent],
  providers: [Servicio1Service]
})
export class AppModule { }
