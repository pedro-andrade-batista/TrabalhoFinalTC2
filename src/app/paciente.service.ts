import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './models/paciente.model';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  baseURL = 'https://tiagoifsp.ddns.net/clinicaMedicaJWT/';
  listaPacientes: Paciente[];

  constructor(private http: HttpClient) {}

  public getPatient() {
    return this.http.get<Paciente[]>(`${this.baseURL}pacientes.php`);
  }

  public addPatient(patient: Paciente): Observable<any> {
    let body = new HttpParams();
    body = body.set('nome', patient.nome);
    body = body.set('dataNascimento', patient.dataNascimento);
    return this.http.post(`${this.baseURL}pacientes.php`, body, {
      observe: 'response',
    });
  }
}
