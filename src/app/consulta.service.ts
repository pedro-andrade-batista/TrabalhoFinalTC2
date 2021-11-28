import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from './models/consulta.model';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  baseURL = 'https://tiagoifsp.ddns.net/clinicaMedicaJWT/';
  listaPacientes: Consulta[];

  constructor(private http: HttpClient) {}

  getConsultas(): Observable<any> {
    return this.http.get<Consulta[]>(`${this.baseURL}consultas.php`);
  }

  addConsulta(consulta: Consulta): Observable<any> {
    let body = new HttpParams();
    let data = `${consulta.dataConsulta} ${consulta.horaConsulta}`;
    console.log(data);
    body = body.set('idPaciente', consulta.idPaciente);
    body = body.set('idMedico', consulta.idMedico);
    body = body.set('data', data);
    return this.http.post(`${this.baseURL}consultas.php`, body, {
      observe: 'response',
    });
  }

  public removeConsulta(consulta: Consulta): Observable<any> {
    return this.http.delete(`${this.baseURL}consultas.php?id=${consulta.id}`, {
      observe: 'response',
    });
  }
}
