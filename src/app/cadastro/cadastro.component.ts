import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIconnectionService } from '../apiconnection.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  formCadastro: FormGroup;

  constructor(
    private service: APIconnectionService
    ){}

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
    if(this.formCadastro.valid){
      this.service.login(this.formCadastro.value).subscribe(res => {
        if(res.ok == true){
          console.log(res)
        }
      })
    }
  }
}
