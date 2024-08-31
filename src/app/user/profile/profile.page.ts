import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(private router: Router) {}

  navigateToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  navigateToSettings() {
    // Aquí podrías redirigir a una página de ajustes si la tuvieras
    this.router.navigate(['/settings']);
  }
}
