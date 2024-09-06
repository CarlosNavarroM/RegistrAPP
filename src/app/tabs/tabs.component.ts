import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {

  constructor(private navCtrl: NavController) {}

  // Navega a la página 'home-docente' y reemplaza la vista actual (se destruye al salir)
  navigateToHome() {
    this.navCtrl.navigateRoot(['/home-docente']);
  }

  // Navega a la página 'profile' y reemplaza la vista actual
  navigateToProfile() {
    this.navCtrl.navigateRoot(['/profile']);
  }

  // Navega a la página 'scan-qr' y reemplaza la vista actual
  navigateToQR() {
    this.navCtrl.navigateRoot(['/scan-qr']);
  }
}
