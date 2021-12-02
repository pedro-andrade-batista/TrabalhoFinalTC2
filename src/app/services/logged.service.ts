import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  constructor() { }

  isLogged(): boolean {
    if(sessionStorage.getItem("token") != null)
      return true;
    return false;
  }
}
