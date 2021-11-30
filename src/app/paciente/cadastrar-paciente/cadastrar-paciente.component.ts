import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.css'],
})
export class CadastrarPacienteComponent implements OnInit {
  formCadastroPaciente: FormGroup;

  constructor(
    private service: PacienteService,
    private toastr: ToastrService,
    private roteamento: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formCadastroPaciente = new FormGroup({
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      dataNascimento: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.formCadastroPaciente.valid) {
      this.service
        .addPatient(this.formCadastroPaciente.value)
        .subscribe((res) => {
          if(!res.body.msg){
            this.toastr.success('O cadastro foi realizado com sucesso');
            this.roteamento.navigate(['/listpatients']);
          }else {
            this.toastr.error('O cadastro não foi realizado!');
          }
        });
    }
  }
}
