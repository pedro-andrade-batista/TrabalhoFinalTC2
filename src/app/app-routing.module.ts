import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastrarConsultaComponent } from './consulta/cadastrar-consulta/cadastrar-consulta.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastrarMedicoComponent } from './medico/cadastrar-medico/cadastrar-medico.component';
import { ListarMedicosComponent } from './medico/listar-medicos/listar-medicos.component';
import { CadastrarPacienteComponent } from './paciente/cadastrar-paciente/cadastrar-paciente.component';
import { ListarPacientesComponent } from './paciente/listar-pacientes/listar-pacientes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: CadastroComponent },
  { path: 'registerpatient', component: CadastrarPacienteComponent },
  { path: 'listpatients', component: ListarPacientesComponent },
  { path: 'listdoctors', component: ListarMedicosComponent },
  { path: 'registerdoctor', component: CadastrarMedicoComponent },
  { path: 'registerconsultation', component: CadastrarConsultaComponent },
  { path: 'patients', redirectTo: "/listpatients", pathMatch: "prefix"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
