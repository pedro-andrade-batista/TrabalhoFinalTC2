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
  @Input() listaMedicos: Medico[];
  @Input() paciente: Paciente;
  @Output() onClose = new EventEmitter();
  listaConsultas: Consulta[];
  listaConsultaPaciente: Array<any> = [];

  constructor(
    private serviceConsulta: ConsultaService,
    private serviceMedico: MedicoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getConsultas();
  }

  getConsultas() {
    this.serviceConsulta.getConsultas().toPromise().then((res) => {
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
            this.listaConsultaPaciente.push(newObject);
          }
        }
      });
    });
  }

  cancel() {
    this.onClose.emit(null);
  }

  remover(consulta: Consulta) {
    this.serviceConsulta.removeConsulta(consulta).subscribe((res) => {
      if (res.body.status == "OK") {
        this.toastr.success('A exclusão foi realizada com sucesso');
        this.cancel();
      } else {
        this.toastr.error('A exclusão não foi realizada!');
      }
    });
  }
}
