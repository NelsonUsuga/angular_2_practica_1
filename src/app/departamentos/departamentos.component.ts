import { Component } from '@angular/core';
import { Servicio1Service } from '../servicios/servicio1.service';

@Component({
    selector: 'app-departamentos',
    templateUrl: './departamentos.component.html',
    styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent {

    // Guarda todos los registros de departamentos
    departamentos: Array<string>;

    // Guarda el departamento específico que se va a editar
    departamento: Array<string>;

    descripcion: string;
    codigoiso: string;
    codigonacional: string;
    indicativo: string;
    indicadorsistema: boolean;

    readonly: boolean;

    constructor(private servicio1: Servicio1Service) {
        this.descripcion = '';
        this.codigoiso = '';
        this.codigonacional = '';
        this.indicativo = '';
        this.indicadorsistema = false;

        this.readonly = false;
    }

    listarDepartamentos() {
        this.servicio1.obtenerDepartamentos().subscribe(
            dato => this.departamentos = dato.data,
            err => alert(err)
        );
    }

    editarDepartamento(id: string) {
        console.log('editar ' + id);

        this.servicio1.obtenerDepartamento(id).subscribe(
            dato => this.departamento = dato.data[0],
            err => alert(err),
            () => this.llenarFomulario(this.departamento)
        );
    }

    llenarFomulario(departamento) {
        // console.log(departamento);
        this.descripcion = departamento.descripcion;
        this.codigoiso = departamento.codigoiso;
        this.codigonacional = departamento.codigonacional;
        this.indicativo = departamento.indicativo;
        this.indicadorsistema = (departamento.indicadorsistema === '1');

        // Si el registro es del sistema los campos no se pueden editar
        this.readonly = this.indicadorsistema;
    }

    borrarDepartamento(id: string, indicadorsistema: string) {
        console.log('borrar ' + id);
        if (indicadorsistema === '1' || id === ''  || id === '0') {
            console.log('No se puede borrar ' + id);
            return;
        }

        this.servicio1.borrarDepartamento(id).subscribe(
            dato => console.log(dato),
            err => alert(err),
            () => this.listarDepartamentos()
        );
    }
}
