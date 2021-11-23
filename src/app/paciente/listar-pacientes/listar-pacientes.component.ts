import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/paciente.service';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css'],
})
export class ListarPacientesComponent implements OnInit {
  listaPacientes: Paciente[] = [
    { nome: 'Felipe' },
    { nome: 'Felipe' },
    { nome: 'Felipe' },
  ];

  constructor(private service: PacienteService) {}

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes() {
    this.service.getPatient().subscribe((res) => {
      this.listaPacientes = res;
    });
  }
}
