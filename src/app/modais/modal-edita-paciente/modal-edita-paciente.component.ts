import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/paciente.service';

@Component({
  selector: 'app-modal-edita-paciente',
  templateUrl: './modal-edita-paciente.component.html',
  styleUrls: ['./modal-edita-paciente.component.css']
})
export class ModalEditaPacienteComponent implements OnInit {
  formEditarPaciente: FormGroup;
  @Input() paciente: Paciente;
  @Output() onClose = new EventEmitter();
  constructor(
    private servicePaciente: PacienteService,
    private toastr: ToastrService,
    private roteamento : Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formEditarPaciente = new FormGroup({
      nome: new FormControl(this.paciente.nome, [
        Validators.required,
        Validators.minLength(4),
      ]),
      dataNascimento: new FormControl(this.paciente.dataNascimento, [Validators.required]),
      id: new FormControl(this.paciente.id),
    });
  }

  onSubmit(): void {
    if (this.formEditarPaciente.valid) {
      this.servicePaciente.editPatient(this.formEditarPaciente.value).subscribe((res) => {
        // console.log(res);
        if(res.ok == true){
          this.toastr.success("A edição foi realizada com sucesso");
          this.roteamento.navigate(["/patients"])
          // this.cancel();
          // this.ngOnInit();
        }
        else{
          this.toastr.error("A edição não foi realizada!");
        }
      });
    }
  }

  cancel() {
    this.onClose.emit(null);
  }
}
