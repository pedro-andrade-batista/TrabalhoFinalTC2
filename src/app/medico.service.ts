import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from './models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  baseURL = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/";
  listaPacientes: Medico[];

  constructor(private http : HttpClient) { }

  public getDoctors() {
    // this.http.get<Paciente[]>(this.baseURL + "/").subscribe(res => {
    //   this.listaPacientes = res;
    // })
    return this.http.get<Medico[]>(`${this.baseURL}medicos.php`)
  }
}
