import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UtilsService } from '../services/utils.service'; // Servicio que maneja localStorage

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router, private utilsSvc: UtilsService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = this.utilsSvc.getFromLocalStorage('role'); // Obtener el rol desde localStorage
    const expectedRole = route.data['role']; // Obtener el rol esperado desde la ruta

    console.log('Rol obtenido de localStorage:', role); // Log para verificar el rol
    console.log('Rol esperado para la ruta:', expectedRole); // Log para verificar el rol esperado

    if (role === expectedRole) {
      return true; // Si el rol coincide, permitir el acceso
    } else {
      console.log('Acceso denegado. Redirigiendo a /home');
      this.router.navigate(['/home']); // Si no coincide, redirigir
      return false;
    }
  }
}
