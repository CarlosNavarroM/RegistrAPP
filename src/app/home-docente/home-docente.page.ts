import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.page.html',
  styleUrls: ['./home-docente.page.scss'],
})
export class HomeDocentePage {
  fecha: string = new Date().toLocaleDateString();  // Genera la fecha actual
  seccion: string = 'Clase de 4to grado';           // Datos de sección falsos
  cursos: any[] = [];                               // Asistencias por curso

  constructor(private router: Router) {
    // Generar datos falsos de asistencia por curso
    this.cursos = [
      {
        nombre: 'Matemáticas',
        asistencias: [
          { fecha: '2024-09-01', estado: 'Presente' },
          { fecha: '2024-09-02', estado: 'Ausente' },
        ],
        expanded: false,
      },
      {
        nombre: 'Historia',
        asistencias: [
          { fecha: '2024-09-01', estado: 'Presente' },
          { fecha: '2024-09-03', estado: 'Presente' },
        ],
        expanded: false,
      },
      {
        nombre: 'Ciencias',
        asistencias: [
          { fecha: '2024-09-01', estado: 'Ausente' },
          { fecha: '2024-09-02', estado: 'Presente' },
        ],
        expanded: false,
      },
      {
        nombre: 'Educación Física',
        asistencias: [
          { fecha: '2024-09-01', estado: 'Presente' },
          { fecha: '2024-09-03', estado: 'Presente' },
        ],
        expanded: false,
      },
      {
        nombre: 'Arte',
        asistencias: [
          { fecha: '2024-09-01', estado: 'Presente' },
          { fecha: '2024-09-02', estado: 'Ausente' },
        ],
        expanded: false,
      },
    ];
  }

  // Método para expandir o colapsar la sección del curso
  toggleSection(index: number) {
    this.cursos[index].expanded = !this.cursos[index].expanded;
  }

  generarCodigo() {
    // Generar el código QR dinámico
    const codigoQR = 'MP003|' + Math.floor(100000 + Math.random() * 900000).toString();

    // Navegar a la nueva página de QR, pasando el código generado y los datos adicionales
    this.router.navigate(['/qr-view', {
      codigoQR: codigoQR,
      fecha: this.fecha,
      seccion: this.seccion
    }]);
  }
}
