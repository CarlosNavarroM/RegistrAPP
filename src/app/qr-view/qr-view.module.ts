import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode'; // Módulo para generar el QR

import { QrViewPageRoutingModule } from './qr-view-routing.module';
import { QrViewPage } from './qr-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,  // Asegúrate de importar el módulo QR
    QrViewPageRoutingModule
  ],
  declarations: [QrViewPage]
})
export class QrViewPageModule {}
