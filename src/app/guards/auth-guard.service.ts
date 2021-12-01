import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  private isAuthenticated: boolean = false;

  canActivate() {
    if(sessionStorage.getItem("token") != null)
      this.isAuthenticated = true;
    return this.isAuthenticated;
  }
}
