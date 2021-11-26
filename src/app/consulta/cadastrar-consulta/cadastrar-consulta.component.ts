import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-consulta',
  templateUrl: './cadastrar-consulta.component.html',
  styleUrls: ['./cadastrar-consulta.component.css'],
})
export class CadastrarConsultaComponent implements OnInit {
  formCadastroConsulta: FormGroup;

  constructor(private toastr: ToastrService, private roteamento: Router) {}

  ngOnInit(): void {}

  private initForm() {
    this.formCadastroConsulta = new FormGroup({});
  }

  onSubmit(): void {}
}
