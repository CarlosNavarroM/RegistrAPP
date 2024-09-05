import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), 
    password: new FormControl('', [Validators.required]),
  });

fireBaseSvc = inject(FirebaseService);
utilsSvc = inject(UtilsService);

  ngOnInit() {
  }

  async submit() {
    if (this.loginForm.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.fireBaseSvc.signIn(this.loginForm  .value as User).then(res => {
        console.log('Usuario autenticado:', res.user);
        const email = this.loginForm.get('email')?.value;
        if (email && email.includes('@docente')) { 
          this.utilsSvc.routerLink('/home-docente');
        } else {
          this.utilsSvc.routerLink('/home-alumno');
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
}