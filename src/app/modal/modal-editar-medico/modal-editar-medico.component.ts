import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-editar-medico',
  templateUrl: './modal-editar-medico.component.html',
  styleUrls: ['./modal-editar-medico.component.css'],
})
export class ModalEditarMedicoComponent implements OnInit {
  formEditarMedico: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
