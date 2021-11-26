import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ListarPacientesComponent } from './paciente/listar-pacientes/listar-pacientes.component';
import { CadastrarPacienteComponent } from './paciente/cadastrar-paciente/cadastrar-paciente.component';
import { LogInterceptorInterceptor } from './log-interceptor.interceptor';
import { ListarMedicosComponent } from './medico/listar-medicos/listar-medicos.component';
import { CadastrarMedicoComponent } from './medico/cadastrar-medico/cadastrar-medico.component';
import { CadastrarConsultaComponent } from './consulta/cadastrar-consulta/cadastrar-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    NavComponent,
    ListarPacientesComponent,
    CadastrarPacienteComponent,
    ListarMedicosComponent,
    CadastrarMedicoComponent,
    CadastrarConsultaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
