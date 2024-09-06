import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomeDocentePageRoutingModule } from './home-docente-routing.module';
import { HomeDocentePage } from './home-docente.page';
import { QRCodeModule } from 'angularx-qrcode'; // Importa el nuevo módulo QR
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDocentePageRoutingModule,
    SharedModule,
    QRCodeModule, // Usa este módulo en lugar de NgxQRCodeModule
  ],
  declarations: [HomeDocentePage]
})
export class HomeDocentePageModule {}
