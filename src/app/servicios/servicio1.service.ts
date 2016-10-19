import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class Servicio1Service {

    constructor(private http: Http) { }

    obtenerDepartamentos() {
        let
        urlDepartamentos = 'http://localhost:3050/krgo/backend/public/operacionbd/departamentos',
        parametro = '{"encabezado":{"oid":17}}',
        header = new Headers;
        header.append('content-type', 'application/json');
        return this.http.post(urlDepartamentos, parametro, { headers: header }).map(res => res.json());
        /*
        // También funciona sin header
        return this.http.post(urlDepartamentos, parametro).map(res => res.json());*/
    }

    obtenerDepartamento(id: string) {
        let
        urlDepartamentos = 'http://localhost:3050/krgo/backend/public/operacionbd/departamentos',
        parametro = '{"encabezado":{"oid":17}, "filtros":{"id":' + id + '}}',
        header = new Headers;
        header.append('content-type', 'application/json');
        return this.http.post(urlDepartamentos, parametro, { headers: header }).map(res => res.json());
        /*
        // También funciona sin header
        return this.http.post(urlDepartamentos, parametro).map(res => res.json());*/
    }

    grabarDepartamento(datos) {
        let
        urlDepartamentos = 'http://localhost:3050/krgo/backend/public/operacionbd/grabardepartamento',
        parametro = `{
            "encabezado": {
                "oid": 17
            },
            "data": [
                {
                "id": ` + datos.id + `,
                "codigonacional": "` + datos.codigonacional + `",
                "descripcion": "` + datos.descripcion + `",
                "indicativo": "` + datos.indicativo + `",
                "idsyspais": 46,
                "indicadorsistema": "` + datos.indicadorsistema + `",
                "codigoiso": "` + datos.codigoiso + `",
                "accion": "i"
                }
            ]
        }`,
        header = new Headers;
        header.append('content-type', 'application/json');
        return this.http.post(urlDepartamentos, parametro, { headers: header }).map(res => res.json());
        /*
        // También funciona sin header
        return this.http.post(urlDepartamentos, parametro).map(res => res.json());*/
    }

    borrarDepartamento(id: string) {
        let
        urlDepartamentos = 'http://localhost:3050/krgo/backend/public/operacionbd/borrardepartamento',
        parametro = '{"encabezado": {"oid": 17}, "data": [{"id":' + id + ', "accion":"d"}]}',
        header = new Headers;
        header.append('content-type', 'application/json');
        return this.http.post(urlDepartamentos, parametro, { headers: header }).map(res => res.json());
        /*
        // También funciona sin header
        return this.http.post(urlDepartamentos, parametro).map(res => res.json());*/
    }
}
