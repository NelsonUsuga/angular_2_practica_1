import { Injectable } from '@angular/core';


@Injectable()
export class Servicio1Service {

    private urlDepartamentos: string = 'localhost:3050/krgo/backend/public/operacionbd/departamentos';

  constructor() { }

  obtenerDepartamentos() {
      return 'hola  a todos desde departamentos';
        // return this.http.post(this.urlDepartamentos, '{"encabezado":{"oid":17}}').map(res => res.json());
    }
}
