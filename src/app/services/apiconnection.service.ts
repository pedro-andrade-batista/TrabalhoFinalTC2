import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root',
})
export class APIconnectionService {
  baseURL = 'https://tiagoifsp.ddns.net/clinicaMedicaJWT/';

  constructor(private http: HttpClient) {}

  public addAdmin(admin: Admin): Observable<any> {
    let body = new HttpParams();
    body = body.set('login', admin.email);
    body = body.set('senha', admin.senha);
    return this.http.put(`${this.baseURL}administradores.php`, body, {
      observe: 'response',
    });
  }

  public login(admin: Admin): Observable<any> {
    let body = new HttpParams();
    body = body.set('login', admin.email);
    body = body.set('senha', admin.senha);
    return this.http.post(`${this.baseURL}administradores.php`, body, {
      observe: 'response',
    });
  }
}
