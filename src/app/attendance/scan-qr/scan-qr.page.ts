import { Component, inject } from '@angular/core';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage {
  qrEscaneado = '';
  alumnoAsistencia: {
    seccion: string;
    asignatura: string;
    fecha: string;
  } | null = null;
  user = {} as User;
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  async ngOnInit() {
    this.user = this.utilsSvc.getFromLocalStorage('user');
  }

  async escanear() {
    const qr = await BarcodeScanner.scan();
    this.qrEscaneado = qr.code!;
    try {
      console.log(this.qrEscaneado);
      const data = JSON.parse(this.qrEscaneado); // Si el QR es un JSON
      this.alumnoAsistencia = {
        seccion: data.seccion,
        asignatura: data.asignatura,
        fecha: data.fecha,
      };
    } catch (err) {
      console.error(err);
      this.utilsSvc.presentToast({
        message: 'QR no válido, intente de nuevo',
        duration: 2000, 
        color: 'danger',
        position: 'middle',
        icon: 'close-circle-outline',
      });
    }
  }

  async marcarAsistencia() {
    let path = `users/${this.user.uid}/asistencias`;
    const loading = await this.utilsSvc.loading();
    await loading.present();
    this.firebaseSvc.addDocument(path, this.alumnoAsistencia);
    this.utilsSvc
      .presentToast({
        message: 'Asistencia marcada',
        duration: 2000,
        position: 'middle',
        color: 'success',
        icon: 'checkmark-circle-outline',
      })
      .catch((err) => {
        console.error(err);
        this.utilsSvc.presentToast({
          message: err.message,
          duration: 2000,
          color: 'danger',
          position: 'middle',
          icon: 'close-circle-outline',
        });
      })
      .finally(() => {
        loading.dismiss();
      });
  }
}
