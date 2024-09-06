import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Attendance {
  date: string;
  class: string;
  status: string;
}

@Component({
  selector: 'app-attendance-history',
  templateUrl: './attendance-history.page.html',
  styleUrls: ['./attendance-history.page.scss'],
})
export class AttendanceHistoryPage implements OnInit, OnDestroy {

  attendances: Attendance[] = [
    { date: '2024-09-01', class: 'Matemáticas', status: 'Presente' },
    { date: '2024-09-02', class: 'Ciencias', status: 'Ausente' },
    { date: '2024-09-03', class: 'Historia', status: 'Presente' },
    { date: '2024-09-04', class: 'Educación Física', status: 'Presente' },
    { date: '2024-09-05', class: 'Arte', status: 'Ausente' },
    { date: '2024-09-06', class: 'Matemáticas', status: 'Presente' },
    { date: '2024-09-07', class: 'Ciencias', status: 'Presente' },
    { date: '2024-09-08', class: 'Historia', status: 'Ausente' },
    { date: '2024-09-09', class: 'Educación Física', status: 'Presente' },
    { date: '2024-09-10', class: 'Arte', status: 'Presente' },
    { date: '2024-09-11', class: 'Matemáticas', status: 'Ausente' },
    { date: '2024-09-12', class: 'Ciencias', status: 'Presente' },
    { date: '2024-09-13', class: 'Historia', status: 'Presente' },
    { date: '2024-09-14', class: 'Educación Física', status: 'Ausente' },
    { date: '2024-09-15', class: 'Arte', status: 'Presente' },
    { date: '2024-09-16', class: 'Matemáticas', status: 'Presente' },
    { date: '2024-09-17', class: 'Ciencias', status: 'Ausente' },
    { date: '2024-09-18', class: 'Historia', status: 'Presente' },
    { date: '2024-09-19', class: 'Educación Física', status: 'Presente' },
    { date: '2024-09-20', class: 'Arte', status: 'Ausente' },
    { date: '2024-09-21', class: 'Matemáticas', status: 'Presente' },
    { date: '2024-09-22', class: 'Ciencias', status: 'Presente' },
    { date: '2024-09-23', class: 'Historia', status: 'Ausente' },
    { date: '2024-09-24', class: 'Educación Física', status: 'Presente' },
    { date: '2024-09-25', class: 'Arte', status: 'Presente' },
    { date: '2024-09-26', class: 'Matemáticas', status: 'Ausente' },
    { date: '2024-09-27', class: 'Ciencias', status: 'Presente' },
    { date: '2024-09-28', class: 'Historia', status: 'Presente' },
    { date: '2024-09-29', class: 'Educación Física', status: 'Ausente' },
    { date: '2024-09-30', class: 'Arte', status: 'Presente' }
  ];

  filteredAttendances: Attendance[] = [];
  selectedClass: string | null = null;

  classes = ['Matemáticas', 'Ciencias', 'Historia', 'Educación Física', 'Arte'];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    console.log('AttendanceHistoryPage iniciado');
  }

  filterAttendance(event: any) {
    this.selectedClass = event.detail.value;
    if (this.selectedClass) {
      this.filteredAttendances = this.attendances.filter(att => att.class === this.selectedClass);
    } else {
      this.filteredAttendances = [];
    }
  }

  goBack() {
    this.navCtrl.back();
  }

  ngOnDestroy() {
    console.log('AttendanceHistoryPage destruido');
  }
}
