import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidade } from '../models/especialidade.model';

@Injectable({
  providedIn: 'root',
})
export class EspecialidadesService {
  baseURL = 'https://tiagoifsp.ddns.net/clinicaMedicaJWT/';
  listaPacientes: Especialidade[];

  constructor(private http: HttpClient) {}

  getEspecialidades(): Observable<any> {
    return this.http.get<Especialidade[]>(`${this.baseURL}especialidades.php`);
  }
}
