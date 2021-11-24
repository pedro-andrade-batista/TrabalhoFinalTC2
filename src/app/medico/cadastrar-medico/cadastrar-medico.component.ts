import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicoService } from 'src/app/medico.service';

@Component({
  selector: 'app-cadastrar-medico',
  templateUrl: './cadastrar-medico.component.html',
  styleUrls: ['./cadastrar-medico.component.css'],
})
export class CadastrarMedicoComponent implements OnInit {
  formCadastroMedico: FormGroup;

  constructor(private service: MedicoService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formCadastroMedico = new FormGroup({
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      idEspecialidade: new FormControl(null),
    });
  }

  onSubmit(): void {
    if (this.formCadastroMedico.valid) {
      this.service.addDoctor(this.formCadastroMedico.value).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
