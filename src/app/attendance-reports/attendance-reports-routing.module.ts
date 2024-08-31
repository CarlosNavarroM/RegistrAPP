import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceReportsPage } from './attendance-reports.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceReportsPageRoutingModule {}
