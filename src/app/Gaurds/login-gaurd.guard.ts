import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CacheService } from '../Services/cache-service-service.service';

@Injectable()
export class LoginGaurdGuard implements CanActivate {

  constructor(private  cacheService : CacheService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.cacheService.loggedIn === true || window.sessionStorage.getItem('adminlogin') === 'true') {
      return true  ;
    } else {
      return false ;
    }
  }
}
