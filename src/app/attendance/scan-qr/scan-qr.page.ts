import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage {
  constructor(private platform: Platform) {}

  // Método vacío temporalmente
  startScan() {
    console.log('Escaneo deshabilitado temporalmente.');
  }

  // Método para detener el escaneo (puedes eliminarlo o dejarlo vacío por ahora)
  ionViewWillLeave() {
    // No hay nada que detener
  }
}
