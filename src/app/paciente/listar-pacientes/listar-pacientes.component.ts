import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente.model';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css'],
})
export class ListarPacientesComponent implements OnInit {
  listaPacientes: Paciente[];

  constructor() {}

  ngOnInit(): void {}
}
