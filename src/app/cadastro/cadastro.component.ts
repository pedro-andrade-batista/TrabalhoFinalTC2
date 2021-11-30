import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APIconnectionService } from '../services/apiconnection.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  formCadastro: FormGroup;

  constructor(
    private service: APIconnectionService,
    private toastr: ToastrService,
    private roteamento: Router
    
    ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formCadastro = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      senha: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit(): void {
    if (this.formCadastro.valid) {
      this.service.addAdmin(this.formCadastro.value).subscribe((res) => {
        if (!res.body.status) {
          this.toastr.success('Sucesso', 'Cadastro realizado com sucesso');
          this.roteamento.navigate(['/login']);
        }
        else {
          this.toastr.error('Erro', 'Houve uma falha no cadastro: ' + res.body.msg);
        }
      });
    }
  }
}
