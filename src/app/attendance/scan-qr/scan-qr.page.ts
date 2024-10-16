import { Component } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Platform } from '@ionic/angular'; // Importa Platform para escuchar el botón de retroceso

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage {
  qrCodeScanner: Html5QrcodeScanner | undefined;

  constructor(private platform: Platform) {
    // Escuchar evento de retroceso de hardware en Android para detener el escáner
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
    // Aquí puedes manejar el contenido escaneado
  }

  onScanFailure(error: any) {
    console.warn(`Error de escaneo: ${error}`);
    // Manejar errores o reintentos
  }

  stopScan() {
    if (this.qrCodeScanner) {
      this.qrCodeScanner.clear(); // Detiene el escáner
      console.log('Escaneo detenido');
    }
  }

  // Detener el escáner cuando la vista se va
  ionViewWillLeave() {
    this.stopScan();
  }
}
