import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { User } from 'src/app/models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importar Firestore

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  backButtonSubscription: any;

  fireBaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
  firestore = inject(AngularFirestore); // Inyectar Firestore para consultar el rol

  constructor(private fb: FormBuilder, private router: Router, private platform: Platform) {}

  ngOnInit() {
    // Crear el formulario de inicio de sesión
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Suscribirse al botón de hardware de atrás (para Android)
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/']); // Navega a la página inicial cuando se presiona atrás
    });
  }

  async submit() {
    if (this.loginForm.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.fireBaseSvc.signIn(this.loginForm.value as User).then(async (res) => {
        console.log('Usuario autenticado:', res.user);

        // Obtener el UID del usuario autenticado
        const uid = res.user?.uid;

        // Consultar el documento del usuario en Firestore
        const userDoc = await this.firestore.collection('users').doc(uid).get().toPromise();

        if (userDoc.exists) {
          const userData = userDoc.data() as User; // Mapear los datos a tu modelo User

          // Guardar el rol en localStorage
          this.utilsSvc.saveInLocalStorage('role', userData.role);
          this.utilsSvc.saveInLocalStorage('role', userData.role);
console.log('Rol guardado en localStorage:', userData.role); // Verificar el rol guardado


          // Redirigir al usuario según su rol
          if (userData.role === 'Docente') {
            this.utilsSvc.routerLink('/home-docente');
          } else if (userData.role === 'Alumno') {
            this.utilsSvc.routerLink('/home-alumno');
          }
        } else {
          console.error('Documento de usuario no encontrado.');
        }

      }).catch(err => {
        console.error('Error al autenticar usuario:', err);
        this.utilsSvc.presentToast({ 
          message: 'Error al autenticar usuario', 
          duration: 2000,
          color: 'danger',
          position:'middle',
          icon: 'close-circle-outline' 
        });
      }).finally(() => {
        loading.dismiss();
      });
    }
  }

  // Desuscribirse del botón de atrás al destruir el componente
  ngOnDestroy() {
    if (this.backButtonSubscription) {
      this.backButtonSubscription.unsubscribe();
    }
  }
}
