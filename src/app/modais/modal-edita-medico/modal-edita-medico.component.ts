import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EspecialidadesService } from 'src/app/especialidades.service';
import { MedicoService } from 'src/app/medico.service';
import { Especialidade } from 'src/app/models/especialidade.model';
import { Medico } from 'src/app/models/medico.model';

@Component({
  selector: 'app-modal-edita-medico',
  templateUrl: './modal-edita-medico.component.html',
  styleUrls: ['./modal-edita-medico.component.css']
})
export class ModalEditaMedicoComponent implements OnInit {
  formEditarMedico: FormGroup;
  @Input() medico: Medico;
  @Output() onClose = new EventEmitter();
  listaEspecialidades: Especialidade[]
  
  constructor(
    private service: MedicoService,
    private serviceEspecialidade: EspecialidadesService,
    private toastr: ToastrService,
    private roteamento : Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.medico);
    this.getEspecialidades()
  }

  initForm(): void {
    this.formEditarMedico = new FormGroup({
      nome: new FormControl(this.medico.nome, [
        Validators.required,
        Validators.minLength(4),
      ]),
      idEspecialidade: new FormControl(this.medico.idEspecialidade, [Validators.required]),
      id: new FormControl(this.medico.id),
    });
  }

  onSubmit(): void {
    console.log("entrou")
    if (this.formEditarMedico.valid) {
      this.service.editDoctor(this.formEditarMedico.value).subscribe((res) => {
        console.log(res);
        if(res.ok == true){
          this.toastr.success("A edição foi realizada com sucesso");
          this.roteamento.navigate(["/listdoctors"])
        }
        else{
          this.toastr.error("A edição não foi realizada!");
        }
      });
    }
  }

  getEspecialidades() {
    this.serviceEspecialidade.getEspecialidades().subscribe((res) => {
      this.listaEspecialidades = res;
      this.listaEspecialidades.sort(function (a,b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      })
    });
  }

  cancel() {
    this.onClose.emit(null);
  }

}
