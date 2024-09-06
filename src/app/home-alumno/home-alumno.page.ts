import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  // Método para redirigir a la vista de escaneo QR
  escanearCodigoQR() {
    this.router.navigate(['/scan-qr']);
  }

  // Método para redirigir al historial de asistencia del alumno
  irAlHistorialAsistencia() {
    this.router.navigate(['/attendance-history']);
  }
}
