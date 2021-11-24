import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from 'src/app/paciente.service';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.css'],
})
export class CadastrarPacienteComponent implements OnInit {
  formCadastroPaciente: FormGroup;

  constructor(private service: PacienteService) {}

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
          console.log(res);
        });
    }
  }
}
