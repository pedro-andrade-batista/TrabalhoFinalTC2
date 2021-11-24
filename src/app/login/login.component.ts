import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIconnectionService } from '../apiconnection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private service: APIconnectionService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formLogin = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      senha: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit(): void {
    if (this.formLogin.valid) {
      this.service.login(this.formLogin.value).subscribe((res) => {
        console.log(res.body.token);
        if (res.body.token) {
          sessionStorage.setItem('token', res.body.token);
          // sessionStorage.setItem("expires", res["expires"])
          console.log('logado');
        }
      });
    }
  }
}
