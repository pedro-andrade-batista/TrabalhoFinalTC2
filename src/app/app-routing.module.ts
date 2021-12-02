import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastrarConsultaComponent } from './consulta/cadastrar-consulta/cadastrar-consulta.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { NotLoggedGuard } from './guards/not-logged.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastrarMedicoComponent } from './medico/cadastrar-medico/cadastrar-medico.component';
import { ListarMedicosComponent } from './medico/listar-medicos/listar-medicos.component';
import { CadastrarPacienteComponent } from './paciente/cadastrar-paciente/cadastrar-paciente.component';
import { ListarPacientesComponent } from './paciente/listar-pacientes/listar-pacientes.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[NotLoggedGuard] },
  { path: 'login', component: LoginComponent, canActivate:[NotLoggedGuard] },
  { path: 'register', component: CadastroComponent, canActivate:[NotLoggedGuard] },
  { path: 'registerpatient', component: CadastrarPacienteComponent, canActivate: [AuthGuardService] },
  { path: 'listpatients', component: ListarPacientesComponent, canActivate: [AuthGuardService] },
  { path: 'listdoctors', component: ListarMedicosComponent, canActivate: [AuthGuardService] },
  { path: 'registerdoctor', component: CadastrarMedicoComponent, canActivate: [AuthGuardService] },
  { path: 'registerconsultation', component: CadastrarConsultaComponent, canActivate: [AuthGuardService] },
  { path: 'patients', redirectTo: "/listpatients", pathMatch: "prefix"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
