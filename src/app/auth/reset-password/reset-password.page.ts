import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  resetPasswordForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    
  ) { }

  ngOnInit() {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  firebaseService = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  async onSubmit() {
    if (this.resetPasswordForm.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();
      this.firebaseService.resetPassword(this.resetPasswordForm.value.email).then(res => {
      }).catch(err => {
        console.error(err);
        this.utilsSvc.presentToast({ 
          message: err.message, 
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
