import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnDestroy {
  private backButtonSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  navigateToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  async presentLogoutConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmar Cierre de Sesión',
      message: '¿Estás seguro de que quieres cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Se cierra el modal sin realizar ninguna acción
            console.log('Cierre de sesión cancelado');
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.logout();  // Proceder con el cierre de sesión
          }
        }
      ]
    });

    await alert.present();
  }

  logout() {
    // Lógica para cerrar sesión, por ejemplo, eliminar tokens o limpiar datos del usuario
    console.log('Sesión cerrada exitosamente');
    this.router.navigate(['/home']);  // Redirige a la página de inicio
  }

  // Buena práctica: cerrar cualquier recurso cuando el componente se destruye
  ngOnDestroy() {
    if (this.backButtonSubscription) {
      this.backButtonSubscription.unsubscribe();  // Desuscribirse del botón físico de atrás (si existe)
    }
    console.log('El componente ProfilePage ha sido destruido');
  }
}
