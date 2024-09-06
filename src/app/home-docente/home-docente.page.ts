import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de que Router esté importado

@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.page.html',
  styleUrls: ['./home-docente.page.scss'],
})
export class HomeDocentePage {
  codigoQR: string | null = null;
  fecha: string = new Date().toLocaleDateString(); // Fecha actual
  seccion: string = 'Clase de 4to grado';

  constructor(private router: Router) {}  // Asegúrate de inyectar el Router

  // Método para generar el código QR
  generarCodigo() {
    this.codigoQR = 'MP003|' + Math.floor(100000 + Math.random() * 900000).toString();
    
    // Navegar a la página del QR con los datos
    this.router.navigate(['/qr-view', {
      codigoQR: this.codigoQR,
      fecha: this.fecha,
      seccion: this.seccion
    }]);
  }
}
