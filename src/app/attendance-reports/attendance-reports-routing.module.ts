import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceReportsPage } from './attendance-reports.page';  // Asegúrate de importar el componente, no el módulo

const routes: Routes = [
  {
    path: '',
    component: AttendanceReportsPage,  // Usa el componente
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceReportsPageRoutingModule {}
