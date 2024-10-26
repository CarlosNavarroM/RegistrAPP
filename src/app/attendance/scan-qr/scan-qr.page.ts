import { Component } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage {
  qrCodeScanner: Html5QrcodeScanner | undefined;

  constructor(private platform: Platform) {
    // Para detener el escáner al presionar el botón de retroceso en Android
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.stopScan();
    });
  }

  startScan() {
    this.qrCodeScanner = new Html5QrcodeScanner(
      "qr-reader", { fps: 10, qrbox: 250 }, false
    );
    this.qrCodeScanner.render(this.onScanSuccess.bind(this), this.onScanFailure.bind(this));
  }

  onScanSuccess(decodedText: string) {
    console.log(`Código QR escaneado: ${decodedText}`);
    // Aquí puedes extraer y manejar el contenido escaneado
  }

  onScanFailure(error: any) {
    console.warn(`Error de escaneo: ${error}`);
  }

  stopScan() {
    if (this.qrCodeScanner) {
      this.qrCodeScanner.clear();
      console.log('Escaneo detenido');
    }
  }

  ionViewWillLeave() {
    this.stopScan();
  }
}
