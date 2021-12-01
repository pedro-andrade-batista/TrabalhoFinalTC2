import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-modal-edita-paciente',
  templateUrl: './modal-edita-paciente.component.html',
  styleUrls: ['./modal-edita-paciente.component.css'],
})
export class ModalEditaPacienteComponent implements OnInit {
  formEditarPaciente: FormGroup;
  @Input() paciente: Paciente;
  @Output() onClose = new EventEmitter();
  @Output() atualizaChild = new EventEmitter();
  constructor(
    private servicePaciente: PacienteService,
    private toastr: ToastrService,
    private roteamento: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formEditarPaciente = new FormGroup({
      nome: new FormControl(this.paciente.nome, [
        Validators.required,
        Validators.minLength(4),
      ]),
      dataNascimento: new FormControl(this.paciente.dataNascimento, [
        Validators.required,
      ]),
      id: new FormControl(this.paciente.id),
    });
  }

  onSubmit(): void {
    if (this.formEditarPaciente.valid) {
      this.servicePaciente
        .editPatient(this.formEditarPaciente.value)
        .subscribe((res) => {
          if (!res.body.msg) {
            this.toastr.success('A edição foi realizada com sucesso');
            this.roteamento.navigate(['/patients']);
            this.atualizaChild.emit(true);
            this.cancel();
          } else {
            this.toastr.error('A edição não foi realizada!');
          }
        });
    } else {
      this.toastr.error('Erro', 'Houve uma falha na edição');
    }
  }

  cancel() {
    this.onClose.emit(null);
  }
}
