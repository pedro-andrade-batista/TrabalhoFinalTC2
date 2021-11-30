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
  selector: 'app-modal-exibe-medico',
  templateUrl: './modal-exibe-medico.component.html',
  styleUrls: ['./modal-exibe-medico.component.css'],
})
export class ModalExibeMedicoComponent implements OnInit {
  @Input() medico: Medico;
  @Output() onClose = new EventEmitter();
  listaConsultas: Consulta[];
  listaPacientes: Paciente[] = [];
  listaConsultaPaciente: Array<any> = [];

  constructor(
    private serviceConsulta: ConsultaService,
    private servicePaciente: PacienteService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPacientes();
    this.getConsultas();
  }

  getConsultas() {
    this.serviceConsulta.getConsultas().subscribe((res) => {
      this.listaConsultas = res;

      this.listaConsultas.map((consulta) => {
        if (consulta.idMedico == this.medico.id) {
          let paciente = this.listaPacientes.find(
            (paciente) => paciente.id == consulta.idPaciente
          )?.nome;
          if (paciente != undefined) {
            let newObject: ConsultaPesquisada = {
              id: consulta.id,
              medico: this.medico.nome,
              paciente: paciente,
              data: consulta.data,
            };
            console.log(newObject);
            this.listaConsultaPaciente.push(newObject);
          }
        }
      });
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
      if (res.body.status == "OK") {
        this.toastr.success('A exclusão foi realizada com sucesso');
      } else {
        this.toastr.error('A exclusão não foi realizada!');
      }
    });
  }
}
