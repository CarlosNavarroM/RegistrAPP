import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceReportsPageRoutingModule } from './attendance-reports-routing.module';

import { AttendanceReportsPage } from './attendance-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceReportsPageRoutingModule
  ],
  declarations: [AttendanceReportsPage]
})
export class AttendanceReportsPageModule {}
