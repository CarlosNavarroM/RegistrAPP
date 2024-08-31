import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home-docente']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToQR() {
    this.router.navigate(['/scan-qr']);
  }
}
