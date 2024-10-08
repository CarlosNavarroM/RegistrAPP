import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { ScanQrPageRoutingModule } from './scan-qr-routing.module';
import { ScanQrPage } from './scan-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanQrPageRoutingModule,
    SharedModule
  ],
  declarations: [ScanQrPage],
  exports: [ScanQrPage]
})
export class ScanQrPageModule {}
