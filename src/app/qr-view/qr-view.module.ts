import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';

import { IonicModule } from '@ionic/angular';

import { QrViewPageRoutingModule } from './qr-view-routing.module';

import { QrViewPage } from './qr-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrViewPageRoutingModule,
    QRCodeModule
  ],
  declarations: [QrViewPage]
})
export class QrViewPageModule {}
