import { Component } from '@angular/core';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage {

  constructor() {}

  scanQRCode() {
    // Aquí puedes implementar la lógica para escanear un código QR.
    console.log('Escaneando código QR...');
  }
}
