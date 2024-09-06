import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-attendance-reports',
  templateUrl: './attendance-reports.page.html',
  styleUrls: ['./attendance-reports.page.scss'],
})
export class AttendanceReportsPage implements OnInit, OnDestroy {

  cursos: any[] = [];
  expanded: boolean = false;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Simulación de cursos y asistencias
    this.cursos = [
      {
        nombre: 'Matemática Aplicada - Sección 1',
        asistencias: [
          { fecha: '2024-09-01', estado: 'Presente' },
          { fecha: '2024-09-02', estado: 'Ausente' }
        ],
        expanded: false
      },
      {
        nombre: 'Geometría - Sección 2',
        asistencias: [
          { fecha: '2024-09-01', estado: 'Presente' },
          { fecha: '2024-09-03', estado: 'Presente' }
        ],
        expanded: false
      }
    ];
  }

  // Método para alternar la expansión o colapso de un curso
  toggleSection(index: number) {
    this.cursos[index].expanded = !this.cursos[index].expanded;
  }

  // Método para navegar al reporte de asistencia (simulación)
  goToAttendanceReports(cursoId: number) {
    console.log('Navegar al reporte del curso con ID:', cursoId);
  }

  // Método para regresar a la vista anterior
  goBack() {
    this.navCtrl.back();
  }

  ngOnDestroy() {
    console.log('AttendanceReportsPage destruido');
  }
}
