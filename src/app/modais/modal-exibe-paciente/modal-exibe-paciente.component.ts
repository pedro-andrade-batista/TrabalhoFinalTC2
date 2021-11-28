import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsultaService } from 'src/app/services/consulta.service';
import { MedicoService } from 'src/app/services/medico.service';
import { Consulta } from 'src/app/models/consulta.model';
import { ConsultaPesquisada } from 'src/app/models/consultaPesquisada.model';
import { Medico } from 'src/app/models/medico.model';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-modal-exibe-paciente',
  templateUrl: './modal-exibe-paciente.component.html',
  styleUrls: ['./modal-exibe-paciente.component.css'],
})
export class ModalExibePacienteComponent implements OnInit {
  @Input() paciente: Paciente;
  @Output() onClose = new EventEmitter();
  listaConsultas: Consulta[];
  listaMedicos: Medico[];
  listaPacientes: Paciente[];
  listaConsultaPaciente: Array<any> = [];

  constructor(
    private serviceConsulta: ConsultaService,
    private serviceMedico: MedicoService,
    private servicePaciente: PacienteService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getMedicos();
    this.getPacientes();
    this.getConsultas();
  }

  getConsultas() {
    this.serviceConsulta.getConsultas().subscribe((res) => {
      this.listaConsultas = res;

      this.listaConsultas.map((consulta) => {
        if (consulta.idPaciente == this.paciente.id) {
          let medico = this.listaMedicos.find(
            (doctor) => doctor.id == consulta.idMedico
          )?.nome;
          if (medico != undefined) {
            let newObject: ConsultaPesquisada = {
              id: consulta.id,
              medico: medico,
              paciente: this.paciente.nome,
              data: consulta.data,
            };
            console.log(newObject);
            this.listaConsultaPaciente.push(newObject);
          }
        }
      });
    });
  }
  getMedicos() {
    this.serviceMedico.getDoctors().subscribe((res) => {
      this.listaMedicos = res;
    });
  }
  getPacientes() {
    this.servicePaciente.getPatient().subscribe((res) => {
      this.listaPacientes = res;
    });
  }

  cancel() {
    this.onClose.emit(null);
  }

  remover(consulta: Consulta) {
    this.serviceConsulta.removeConsulta(consulta).subscribe((res) => {
      if (res.ok == true) {
        this.toastr.success('A exclusão foi realizada com sucesso');
      } else {
        this.toastr.error('A exclusão não foi realizada!');
      }
    });
  }
}
