import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './guards/role.guard'; // Importar el guard

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home-docente',
    loadChildren: () => import('./home-docente/home-docente.module').then(m => m.HomeDocentePageModule),
    canActivate: [RoleGuard], // Añadir el guard
    data: { role: 'Docente' } // Rol esperado
  },
  {
    path: 'home-alumno',
    loadChildren: () => import('./home-alumno/home-alumno.module').then(m => m.HomeAlumnoPageModule),
    canActivate: [RoleGuard], 
    data: { role: 'Alumno' }
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'scan-qr',
    loadChildren: () => import('./attendance/scan-qr/scan-qr.module').then(m => m.ScanQrPageModule),
    canActivate: [RoleGuard],
    data: { role: 'Alumno' }
  },
  {
    path: 'attendance-history',
    loadChildren: () => import('./attendance/attendance-history/attendance-history.module').then(m => m.AttendanceHistoryPageModule),
    canActivate: [RoleGuard],
    data: { role: 'Alumno' }
  },
  {
    path: 'qr-view',
    loadChildren: () => import('./qr-view/qr-view.module').then(m => m.QrViewPageModule),
    canActivate: [RoleGuard],
    data: { role: 'Docente' }
  },
  {
    path: 'attendance-reports',
    loadChildren: () => import('./attendance-reports/attendance-reports.module').then(m => m.AttendanceReportsPageModule),
    canActivate: [RoleGuard],
    data: { role: 'Docente' }
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./user/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/profile/profile.module').then(m => m.ProfilePageModule)
  },
   
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
