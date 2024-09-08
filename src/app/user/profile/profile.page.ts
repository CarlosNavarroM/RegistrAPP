import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';
import { User } from 'src/app/models/user.model';  // Importar el modelo de usuario si lo tienes

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  private backButtonSubscription: Subscription | null = null;
  role: string = '';  // Variable para almacenar el rol
  user: User | null = null;  // Almacena los datos del usuario

  constructor(
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController,
    private platform: Platform,  // Inyectar Platform para manejar el botón de atrás
    private utilsSvc: UtilsService,  // Inyectar el servicio UtilsService para manejar la limpieza de datos
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Obtener el rol desde el localStorage
    this.role = this.utilsSvc.getFromLocalStorage('role');

    // Obtener los datos del usuario desde el localStorage o desde Firebase
    this.loadUserData();

    // Suscribirse al botón físico de atrás (en Android) para manejar el evento
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.navigateBack();  // Utiliza la función personalizada para regresar
    });
  }

  // Método para cargar los datos del usuario
  loadUserData() {
    // Obtener los datos completos del usuario desde el localStorage
    const storedUser = this.utilsSvc.getFromLocalStorage('user');
    if (storedUser) {
      this.user = storedUser as User;
    } else {
      console.error('No se encontraron datos de usuario en localStorage.');
    }
    console.log('Datos del usuario en el perfil:', this.user); // Verifica qué datos se están cargando

  }

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

  // Función personalizada para navegar hacia atrás según el rol
  navigateBack() {
    if (this.role === 'Docente') {
      this.navCtrl.navigateRoot(['/home-docente']);
    } else if (this.role === 'Alumno') {
      this.navCtrl.navigateRoot(['/home-alumno']);
    } else {
      this.router.navigate(['/home']);  // Redirige a home si no hay rol definido
    }
  }

  logout() {
    this.utilsSvc.clearLocalStorage();
    this.router.navigate(['/login']).then(() => {
      // Forzar la actualización de la vista después de cerrar sesión
      this.cdr.detectChanges();
    });
  }


  ngOnDestroy() {
    if (this.backButtonSubscription) {
      this.backButtonSubscription.unsubscribe();  // Limpiar la suscripción al botón de atrás
    }
    console.log('El componente ProfilePage ha sido destruido');
  }
}
