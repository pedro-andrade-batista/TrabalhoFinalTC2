import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medico } from 'src/app/models/medico.model';
import { Paciente } from 'src/app/models/paciente.model';
import { MedicoService } from 'src/app/services/medico.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css'],
})
export class ListarPacientesComponent implements OnInit {
  listaPacientes: Paciente[];
  listaDoutores: Medico[];
  pacienteSelecionado: Paciente;
  isModalDetalhesOpen = false;
  isModalEditarOpen = false;

  constructor(
    private service: PacienteService,
    private toastr: ToastrService,
    private serviceMedico: MedicoService,
  ) {}

  ngOnInit(): void {
    this.getPacientes();
    this.getMedicos();
  }

  getPacientes() {
    this.service.getPatient().subscribe((res) => {
      this.listaPacientes = res;
    });
  }

  removePatient(id: number) {
    this.service.removePatient(id).subscribe((res) => {
      if (res.body.status == "OK") {
        this.toastr.success('A remoção foi realizada com sucesso');
        this.ngOnInit();
      } else {
        this.toastr.error('A remoção não foi realizada!');
      }
    });
  }

  exibirModalDetalhes(paciente: Paciente) {
    this.isModalDetalhesOpen = true;
    this.pacienteSelecionado = paciente;
  }

  exibirModalEditar(paciente: Paciente) {
    this.isModalEditarOpen = true;
    this.pacienteSelecionado = paciente;
  }

  atualiza(): void {
    this.ngOnInit();
  }

  getMedicos() {
    this.serviceMedico.getDoctors().subscribe((res) => {
      this.listaDoutores = res;
    });
  }

}
