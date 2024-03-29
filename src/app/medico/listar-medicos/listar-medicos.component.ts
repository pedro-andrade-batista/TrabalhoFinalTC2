import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { MedicoService } from 'src/app/services/medico.service';
import { Especialidade } from 'src/app/models/especialidade.model';
import { Medico } from 'src/app/models/medico.model';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente.model';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.css'],
})
export class ListarMedicosComponent implements OnInit {
  listaMedicos: Medico[];
  listaPatients: Paciente[];
  listaEspecialidades: Especialidade[];
  medicoSelecionado: Medico;
  isModalDetalhesOpen = false;
  isModalEditarOpen = false;

  constructor(
    private service: MedicoService,
    private serviceEspecialidade: EspecialidadesService,
    private toastr: ToastrService,
    private servicePaciente: PacienteService,
  ) {}

  ngOnInit(): void {
    this.getMedicos();
    this.getEspecialidades();
    this.getPacientes();
  }
  teste(): void {
    this.getMedicos();
    this.getEspecialidades();
  }

  getMedicos() {
    this.service.getDoctors().subscribe((res) => {
      this.listaMedicos = res;
    });
  }

  getEspecialidades() {
    this.serviceEspecialidade.getEspecialidades().subscribe((res) => {
      this.listaEspecialidades = res;
      this.listaEspecialidades.sort(function (a, b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      });
    });
  }

  removeDoctor(id: number) {
    this.service.removeDoctor(id).subscribe((res) => {
      if (res.body.status == "OK") {
        this.toastr.success('A remoção foi realizada com sucesso');
        this.ngOnInit();
      } else {
        this.toastr.error('A remoção não foi realizada!');
      }
    });
  }

  exibirModalDetalhes(medico: Medico) {
    this.isModalDetalhesOpen = true;
    this.medicoSelecionado = medico;
  }

  exibirModalEditar(medico: Medico) {
    this.isModalEditarOpen = true;
    this.medicoSelecionado = medico;
  }

  getPacientes() {
    this.servicePaciente.getPatient().subscribe((res) => {
      this.listaPatients = res;
    });
  }

  atualiza(): void {
    this.ngOnInit();
  }
}
