import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home-docente',
    loadChildren: () => import('./home-docente/home-docente.module').then(m => m.HomeDocentePageModule)
  },
  // {
  //   path: 'home-alumno',
  //   loadChildren: () => import('./home-alumno/home-alumno.module').then(m => m.HomeAlumnoPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./auth/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'scan-qr',
    loadChildren: () => import('./attendance/scan-qr/scan-qr.module').then(m => m.ScanQrPageModule)
  },
  {
    path: 'attendance-history',
    loadChildren: () => import('./attendance/attendance-history/attendance-history.module').then(m => m.AttendanceHistoryPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then(m => m.LogoutPageModule)
  },
  {
    path: 'attendance-reports',
    loadChildren: () => import('./attendance-reports/attendance-reports.module').then(m => m.AttendanceReportsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./user/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: '',
    redirectTo: 'home',  // Ahora redirige a 'home' en lugar de 'login'
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'  // Redirige cualquier ruta no encontrada a 'home'
  },
  {
    path: 'home-docente',
    loadChildren: () => import('./home-docente/home-docente.module').then( m => m.HomeDocentePageModule)
  },
  {
    path: 'home-alumno',
    loadChildren: () => import('./home-alumno/home-alumno.module').then( m => m.HomeAlumnoPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
