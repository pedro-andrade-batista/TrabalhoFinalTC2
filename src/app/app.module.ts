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
// import { ModalComponent } from './modal/modal.component';
// import { ConteudoModalExibirComponent } from './modal/conteudo-modal-exibir/conteudo-modal-exibir.component';
// import { ModalEditarPacienteComponent } from './modal/modal-editar-paciente/modal-editar-paciente.component';
// import { ModalEditarMedicoComponent } from './modal/modal-editar-medico/modal-editar-medico.component';
import { ModalExibePacienteComponent } from './modais/modal-exibe-paciente/modal-exibe-paciente.component';
import { ModalExibeMedicoComponent } from './modais/modal-exibe-medico/modal-exibe-medico.component';
import { ModalEditaMedicoComponent } from './modais/modal-edita-medico/modal-edita-medico.component';
import { ModalEditaPacienteComponent } from './modais/modal-edita-paciente/modal-edita-paciente.component';
import { DataPipe } from './pipes/data.pipe';

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
    // ModalComponent,
    // ConteudoModalExibirComponent,
    // ModalEditarPacienteComponent,
    // ModalEditarMedicoComponent,
    ModalExibePacienteComponent,
    ModalExibeMedicoComponent,
    ModalEditaMedicoComponent,
    ModalEditaPacienteComponent,
    DataPipe,
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
