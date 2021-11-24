import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/medico.service';
import { Medico } from 'src/app/models/medico.model';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.css']
})
export class ListarMedicosComponent implements OnInit {
  listaMedicos: Medico[]

  constructor(
    private service: MedicoService
  ) { }

  ngOnInit(): void {
    this.getMedicos();
  }

  getMedicos() {
    this.service.getDoctors().subscribe((res) => {
      this.listaMedicos = res;
      console.log(res)
    });
  }

}
