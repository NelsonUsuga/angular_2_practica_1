import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  nombre = 'Nelson';

  fecha = '13 de Octubre de 2016';

  oculto = true;

  textoprueba = 'Prueba de texto bidireccional';

  ocultar(oculto) {
    this.oculto = oculto;
  }
}
