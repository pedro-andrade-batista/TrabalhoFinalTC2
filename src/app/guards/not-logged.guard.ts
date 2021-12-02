import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedService } from '../services/logged.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedGuard implements CanActivate {
  // private isAuthenticated: boolean = false;

  constructor(private serviceLogged: LoggedService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return !this.serviceLogged.isLogged()
  }

  
  
}
