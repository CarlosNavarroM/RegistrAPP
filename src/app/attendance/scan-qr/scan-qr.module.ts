import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { ScanQrPageRoutingModule } from './scan-qr-routing.module';

import { ScanQrPage } from './scan-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanQrPageRoutingModule,SharedModule
  ],
  declarations: [ScanQrPage]
})
export class ScanQrPageModule {}
