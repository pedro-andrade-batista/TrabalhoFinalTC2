import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { MedicoService } from 'src/app/services/medico.service';
import { Especialidade } from 'src/app/models/especialidade.model';

@Component({
  selector: 'app-cadastrar-medico',
  templateUrl: './cadastrar-medico.component.html',
  styleUrls: ['./cadastrar-medico.component.css'],
})
export class CadastrarMedicoComponent implements OnInit {
  formCadastroMedico: FormGroup;
  listaEspecialidades: Especialidade[];

  constructor(
    private service: MedicoService,
    private serviceEspecialidade: EspecialidadesService,
    private toastr: ToastrService,
    private roteamento: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getEspecialidades();
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
        if (res.ok == true) {
          this.toastr.success('O cadastro foi realizado com sucesso');
          this.roteamento.navigate(['/listdoctors']);
        } else {
          this.toastr.error('O cadastro não foi realizado!');
        }
      });
    }
  }

  getEspecialidades() {
    this.serviceEspecialidade.getEspecialidades().subscribe((res) => {
      this.listaEspecialidades = res;
      this.listaEspecialidades.sort(function (a, b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      });
    });
  }
}
