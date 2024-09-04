import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  resetPasswordForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async onSubmit() {
    if (this.resetPasswordForm.valid) {
      const email = this.resetPasswordForm.get('email')?.value;
      console.log(email);
      
      // Mostrar el Toast
      const toast = await this.toastController.create({
        message: 'Revisa tu bandeja de entrada para continuar con el restablecimiento de la contraseña.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
  }
}
