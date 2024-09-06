import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnDestroy {

  constructor(private router: Router, private navCtrl: NavController) {}

  navigateToHome() {
    this.router.navigate(['/home-docente']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToQR() {
    this.router.navigate(['/scan-qr']);
  }

  ngOnDestroy() {
    console.log('TabsComponent ha sido destruido');
  }
}
