import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsultaService } from 'src/app/services/consulta.service';
import { Consulta } from 'src/app/models/consulta.model';
import { ConsultaPesquisada } from 'src/app/models/consultaPesquisada.model';
import { Medico } from 'src/app/models/medico.model';
import { Paciente } from 'src/app/models/paciente.model';

@Component({
  selector: 'app-modal-exibe-medico',
  templateUrl: './modal-exibe-medico.component.html',
  styleUrls: ['./modal-exibe-medico.component.css'],
})
export class ModalExibeMedicoComponent implements OnInit {
  @Input() listaPacientes: Paciente[];
  @Input() medico: Medico;
  @Output() onClose = new EventEmitter();
  listaConsultas: Consulta[];
  listaConsultaPaciente: Array<any> = [];

  constructor(
    private serviceConsulta: ConsultaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    console.log(this.listaPacientes)
    this.getConsultas();
  }

  getConsultas() {
    this.serviceConsulta.getConsultas().toPromise().then((res) => {
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
