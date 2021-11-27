import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-editar-paciente',
  templateUrl: './modal-editar-paciente.component.html',
  styleUrls: ['./modal-editar-paciente.component.css'],
})
export class ModalEditarPacienteComponent implements OnInit {
  formEditarPaciente: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
