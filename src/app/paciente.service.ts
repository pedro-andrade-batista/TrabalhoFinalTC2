import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from "rxjs";
import { Paciente } from './models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  baseURL = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/";
  listaPacientes: Paciente[];

  constructor(private http : HttpClient) { }


  public getPatient() {
    // this.http.get<Paciente[]>(this.baseURL + "/").subscribe(res => {
    //   this.listaPacientes = res;
    // })
    return this.http.get<Paciente[]>(`${this.baseURL}/pacientes.php`)
  }
}
