import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const role = localStorage.getItem('role');
    const requiredRoles = next.data['roles'] as Array<string>;

    if (!role || !requiredRoles.includes(role)) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}