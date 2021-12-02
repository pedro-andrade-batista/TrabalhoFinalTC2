import { Injectable } from '@angular/core';
import { LoggedService } from '../services/logged.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private serviceLogged: LoggedService) { }


  canActivate() {
    return this.serviceLogged.isLogged();
  }
}
