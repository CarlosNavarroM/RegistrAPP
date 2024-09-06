import { Component } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Platform } from '@ionic/angular'; // Para gestionar el ciclo de vida de la vista

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage {
  qrCodeScanner: Html5QrcodeScanner | null = null;

  constructor(private platform: Platform) {}

  // Método para iniciar el escaneo en la web
  startWebScan() {
    this.qrCodeScanner = new Html5QrcodeScanner(
      "qr-reader",             // ID del elemento HTML donde se mostrará la cámara
      { fps: 10, qrbox: 250 }, // Configuración de frames por segundo y tamaño del área de escaneo
      false                    // Modo verbose (false para no mostrar detalles adicionales)
    );
    this.qrCodeScanner.render(this.onScanSuccess.bind(this), this.onScanFailure.bind(this));
  }

  // Método que se ejecuta cuando el QR es escaneado correctamente
  onScanSuccess(decodedText: string) {
    console.log(`Código QR escaneado: ${decodedText}`);
    // Aquí puedes manejar el contenido escaneado, por ejemplo, enviarlo a una API
  }

  // Método que se ejecuta si el escaneo falla o no encuentra un QR
  onScanFailure(error: any) {
    console.warn(`Error de escaneo: ${error}`);
    // Puedes manejar errores o reintentos aquí
  }

  // Detener el escaneo y liberar la cámara cuando se deja la vista
  ionViewWillLeave() {
    if (this.qrCodeScanner) {
      this.qrCodeScanner.clear(); // Detiene el escáner y libera la cámara
      console.log('Escaneo detenido y cámara liberada');
    }
  }
}
