import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module'; // Módulo compartido de la aplicación
import { IonicModule } from '@ionic/angular';

import { ScanQrPageRoutingModule } from './scan-qr-routing.module'; // Enrutamiento de la página

import { ScanQrPage } from './scan-qr.page'; // Componente de la página

@NgModule({
  imports: [
    CommonModule,          // Módulo Angular común
    FormsModule,           // Soporte para formularios en Angular
    IonicModule,           // Funcionalidades de Ionic (UI, navegación, etc.)
    ScanQrPageRoutingModule, // Rutas específicas de la página
    SharedModule           // Módulo compartido que incluye componentes o servicios reutilizables
  ],
  declarations: [ScanQrPage] // Declaración del componente de la página
})
export class ScanQrPageModule {}
