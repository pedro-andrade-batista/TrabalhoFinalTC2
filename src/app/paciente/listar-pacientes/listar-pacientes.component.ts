import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/paciente.service';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css'],
})
export class ListarPacientesComponent implements OnInit {
  listaPacientes: Paciente[];
  isOpen = false;

  constructor(
    private service: PacienteService,
    private toastr: ToastrService,
    private roteamento: Router
  ) {}

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes() {
    this.service.getPatient().subscribe((res) => {
      this.listaPacientes = res;
    });
  }

  removePatient(id: number) {
    this.service.removePatient(id).subscribe((res) => {
      if (res.ok == true) {
        this.toastr.success('A remoção foi realizada com sucesso');
        this.ngOnInit();
      } else {
        this.toastr.error('A remoção não foi realizada!');
      }
    });
  }

  exibirModal() {
    this.isOpen = true;
  }
}
