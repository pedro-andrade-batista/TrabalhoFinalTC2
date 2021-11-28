import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultaService } from 'src/app/services/consulta.service';
import { MedicoService } from 'src/app/services/medico.service';
import { Medico } from 'src/app/models/medico.model';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-cadastrar-consulta',
  templateUrl: './cadastrar-consulta.component.html',
  styleUrls: ['./cadastrar-consulta.component.css'],
})
export class CadastrarConsultaComponent implements OnInit {
  formCadastroConsulta: FormGroup;
  listaMedicos: Medico[];
  listaPacientes: Paciente[];

  constructor(
    private toastr: ToastrService,
    private roteamento: Router,
    private serviceConsulta: ConsultaService,
    private serviceMedico: MedicoService,
    private servicePaciente: PacienteService
  ) {}

  ngOnInit(): void {
    this.initForm();
    // this.getConsultas();
    this.getMedicos();
    this.getPacientes();
  }

  private initForm() {
    this.formCadastroConsulta = new FormGroup({
      idMedico: new FormControl(null, Validators.required),
      idPaciente: new FormControl(null, Validators.required),
      dataConsulta: new FormControl(null, Validators.required),
      horaConsulta: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    if (this.formCadastroConsulta.valid) {
      this.serviceConsulta
        .addConsulta(this.formCadastroConsulta.value)
        .subscribe((res) => {
          console.log(res);
          if (res.ok == true) {
            this.toastr.success('O cadastro foi realizado com sucesso');
            this.roteamento.navigate(['/listpatients']);
          } else {
            this.toastr.error('O cadastro não foi realizado!', res.body.msg);
          }
        });
    }
  }

  getConsultas() {
    this.serviceConsulta.getConsultas().subscribe((res) => {
      // this.listaPacientes = res;
      // console.log(res);
    });
  }
  getMedicos() {
    this.serviceMedico.getDoctors().subscribe((res) => {
      this.listaMedicos = res;
      this.formCadastroConsulta.get('medicos')?.setValue(res);
      // console.log(res);
    });
  }
  getPacientes() {
    this.servicePaciente.getPatient().subscribe((res) => {
      this.listaPacientes = res;
      // console.log(res);
    });
  }
}
