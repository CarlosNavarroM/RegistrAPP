import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router, private utilsSvc: UtilsService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = this.utilsSvc.getFromLocalStorage('role'); // Obtener el rol desde localStorage
    const expectedRole = route.data['role']; // Rol esperado de la ruta

    console.log('Rol obtenido:', role);
    console.log('Rol esperado:', expectedRole);

    if (state.url === '/login' && role) {
      // Redirige según el rol si ya está logueado e intenta acceder al login
      const redirectPath = role === 'Docente' ? '/home-docente' : '/home-alumno';
      this.router.navigate([redirectPath]);
      return false;
    }

    if (role === expectedRole) {
      return true;
    } else {
      console.log('Acceso denegado. Redirigiendo a /home');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
