import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app works!';

  nombre = 'Nelson';

  fecha = '15 de Octubre de 2016';

  oculto = true;

  textoprueba = 'Prueba de texto bidireccional';

  // Ejemplo de directiva
  textosino = 'SI';
  estado = true;

  cambiarEstado() {
      this.estado = !this.estado;
      this.textosino = (this.estado) ? 'SI' : 'NO';
  }
  // Fin ejemplo de directiva

  ocultar(oculto) {
    this.oculto = oculto;
  }
}
