import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router);

  // ==================== Loading ====================
  loading() {
    return this.loadingCtrl.create({ spinner: 'circular' });
  }

  // ==================== Toast ====================
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  // ==================== Redirect ====================
  routerLink(url: string) {
    this.router.navigateByUrl(url);
  }

  // ==================== SaveInLocalStorage ====================
  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value)); // Usar la clave pasada como argumento
  }

  // ==================== GetFromLocalStorage ====================
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
  // ==================== Clear all localStorage ====================
  clearLocalStorage() {
    localStorage.clear();  // Limpiar todo el localStorage
  }
}
