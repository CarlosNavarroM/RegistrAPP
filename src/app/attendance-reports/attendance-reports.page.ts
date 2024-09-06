import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-attendance-reports',
  templateUrl: './attendance-reports.page.html',
  styleUrls: ['./attendance-reports.page.scss'],
})
export class AttendanceReportsPage implements OnInit, OnDestroy {
  cursos: any[] = [];
  filteredAttendance: any[] = [];
  selectedCourse: any;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Simulación de cursos, alumnos y asistencias
    this.cursos = [
      {
        id: 1,
        nombre: 'Matemática Aplicada - Sección 1',
        alumnos: [
          { 
            nombre: 'Carlos Pérez', 
            asistencias: [
              { fecha: '2024-09-01', estado: 'Presente' },
              { fecha: '2024-09-03', estado: 'Ausente' },
              { fecha: '2024-09-03', estado: 'Presente' },
              { fecha: '2024-09-04', estado: 'Presente' },
              { fecha: '2024-09-05', estado: 'Presente' },
              { fecha: '2024-09-06', estado: 'Presente' },
              { fecha: '2024-09-07', estado: 'Presente' }
            ]
          },
          { 
            nombre: 'Lucía Gómez', 
            asistencias: [
              { fecha: '2024-09-01', estado: 'Presente' },
              { fecha: '2024-09-03', estado: 'Ausente' },
              { fecha: '2024-09-03', estado: 'Presente' },
              { fecha: '2024-09-04', estado: 'Presente' },
              { fecha: '2024-09-05', estado: 'Presente' },
              { fecha: '2024-09-06', estado: 'Presente' },
              { fecha: '2024-09-07', estado: 'Presente' }
            ]
          }
        ]
      },
      {
        id: 2,
        nombre: 'Geometría - Sección 2',
        alumnos: [
          { 
            nombre: 'Juan García', 
            asistencias: [
              { fecha: '2024-09-01', estado: 'Presente' },
              { fecha: '2024-09-03', estado: 'Ausente' },
              { fecha: '2024-09-03', estado: 'Presente' },
              { fecha: '2024-09-04', estado: 'Presente' },
              { fecha: '2024-09-05', estado: 'Presente' },
              { fecha: '2024-09-06', estado: 'Presente' },
              { fecha: '2024-09-07', estado: 'Presente' }
            ]
          },
          { 
            nombre: 'Ana Torres', 
            asistencias: [
              { fecha: '2024-09-01', estado: 'Presente' },
              { fecha: '2024-09-03', estado: 'Ausente' },
              { fecha: '2024-09-03', estado: 'Presente' },
              { fecha: '2024-09-04', estado: 'Presente' },
              { fecha: '2024-09-05', estado: 'Presente' },
              { fecha: '2024-09-06', estado: 'Presente' },
              { fecha: '2024-09-07', estado: 'Presente' }


            ]
          }
        ]
      }
    ];

    // Inicializa el filtro vacío
    this.filteredAttendance = [];
  }

  filterAttendance(event: any) {
    this.selectedCourse = event.detail.value;
    if (this.selectedCourse) {
      this.filteredAttendance = this.selectedCourse.alumnos;
    } else {
      this.filteredAttendance = [];
    }
  }

  // Método para regresar a la vista anterior
  goBack() {
    this.navCtrl.back();
  }

  ngOnDestroy() {
    console.log('AttendanceReportsPage destruido');
  }
}
