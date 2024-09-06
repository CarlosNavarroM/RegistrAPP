import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.page.html',
  styleUrls: ['./home-docente.page.scss'],
})
export class HomeDocentePage {
  fecha: string = new Date().toLocaleDateString();  // Fecha actual
  cursos: any[] = [];                               // Datos de los cursos

  constructor(private router: Router) {
    // Datos simulados de los cursos y asistencias
    this.cursos = [
      {
        nombre: 'Matemática Aplicada - Sección 1',
        asistencias: [
          { fecha: '2024-09-01', estado: 'Presente' },
          { fecha: '2024-09-02', estado: 'Ausente' }
        ],
      },
      {
        nombre: 'Geometría - Sección 2',
        asistencias: [
          { fecha: '2024-09-01', estado: 'Presente' },
          { fecha: '2024-09-03', estado: 'Presente' }
        ],
      }
    ];
  }

  // Método para navegar a la página de informes de asistencia de un curso
  goToCourseReport(curso: any) {
    this.router.navigate(['/attendance-reports', { cursoNombre: curso.nombre }]);
  }

  // Generar el código QR y navegar a la vista del código QR
  generarCodigo() {
    const codigoQR = 'MP003|' + Math.floor(100000 + Math.random() * 900000).toString();
    this.router.navigate(['/qr-view', {
      codigoQR: codigoQR,
      fecha: this.fecha
    }]);
  }
}
