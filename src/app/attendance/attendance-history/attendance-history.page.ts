import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-attendance-history',
  templateUrl: './attendance-history.page.html',
  styleUrls: ['./attendance-history.page.scss'],
})
export class AttendanceHistoryPage implements OnInit, OnDestroy {

  attendances = [
    { date: '2024-09-01', class: 'Matemáticas', status: 'Presente' },
    { date: '2024-09-02', class: 'Ciencias', status: 'Ausente' },
    { date: '2024-09-03', class: 'Historia', status: 'Presente' },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    console.log('AttendanceHistoryPage iniciado');
  }

  goBack() {
    this.navCtrl.back();
  }

  ngOnDestroy() {
    console.log('AttendanceHistoryPage destruido');
  }
}
