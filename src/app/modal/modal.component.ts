import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paciente } from '../models/paciente.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  @Input() tipo: Paciente;
  exibir: boolean = true;

  constructor() {}

  ngOnInit(): void {
    if (this.tipo === null || this.tipo === undefined) {
      this.exibirConsultas();
    } else {
      this.initForm();
    }
  }

  exibirConsultas() {}

  initForm() {
    this.exibir = false;
  }

  cancel() {
    this.onClose.emit(null);
  }
}
