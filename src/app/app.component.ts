import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  nombre = 'Nelson';

  fecha = '12 de Octubre de 2016';

  oculto = true;

  ocultar(oculto) {
    this.oculto = oculto;
  }
}
