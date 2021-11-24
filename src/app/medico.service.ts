import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from './models/medico.model';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  baseURL = 'https://tiagoifsp.ddns.net/clinicaMedicaJWT/';
  listaPacientes: Medico[];

  constructor(private http: HttpClient) {}

  public getDoctors() {
    return this.http.get<Medico[]>(`${this.baseURL}medicos.php`);
  }

  public addDoctor(doctor: Medico): Observable<any> {
    console.log(doctor);
    let body = new HttpParams();
    body = body.set('nome', doctor.nome);
    body = body.set('idEspecialidade', doctor.idEspecialidade);
    return this.http.post(`${this.baseURL}medicos.php`, body, {
      observe: 'response',
    });
  }

  public removeDoctor(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}medicos.php?id=${id}`, {observe: "response"});
  }
}
