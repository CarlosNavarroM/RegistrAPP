import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service'; // Servicio para obtener el rol

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  role: string = ''; // Rol del usuario (Alumno o Docente)

  constructor(private navCtrl: NavController, private utilsSvc: UtilsService) {}

  ngOnInit() {
    // Obtener el rol del usuario desde localStorage
    this.role = this.utilsSvc.getFromLocalStorage('role');
    console.log('Rol del usuario:', this.role); // Verificar el rol
  }

  // Navega a la página 'home-docente' o 'home-alumno' según el rol
  navigateToHome() {
    if (this.role === 'Docente') {
      this.navCtrl.navigateRoot(['/home-docente']);
    } else if (this.role === 'Alumno') {
      this.navCtrl.navigateRoot(['/home-alumno']);
    }
  }

  // Navega a la página 'profile'
  navigateToProfile() {
    this.navCtrl.navigateRoot(['/profile']);
  }

  // Navega a la página QR dependiendo del rol
  navigateToQR() {
    if (this.role === 'Docente') {
      this.navCtrl.navigateRoot(['/qr-view']); // Vista QR para docentes
    } else if (this.role === 'Alumno') {
      this.navCtrl.navigateRoot(['/scan-qr']); // Vista QR para alumnos
    }
  }
}
