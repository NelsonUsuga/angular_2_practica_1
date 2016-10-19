import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from '../servicios/servicio1.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css'],
  providers: [Servicio1Service]
})

export class DepartamentosComponent implements OnInit {

  constructor(private servicio1: Servicio1Service) { }

  ngOnInit() {
      console.log(this.servicio1.obtenerDepartamentos());
  }

}
