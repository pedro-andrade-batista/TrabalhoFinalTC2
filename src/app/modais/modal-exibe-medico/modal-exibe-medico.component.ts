import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-exibe-medico',
  templateUrl: './modal-exibe-medico.component.html',
  styleUrls: ['./modal-exibe-medico.component.css']
})
export class ModalExibeMedicoComponent implements OnInit {

  @Output() onClose = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    this.onClose.emit(null);
  }

}
