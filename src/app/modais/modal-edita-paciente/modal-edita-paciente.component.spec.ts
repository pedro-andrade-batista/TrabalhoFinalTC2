import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditaPacienteComponent } from './modal-edita-paciente.component';

describe('ModalEditaPacienteComponent', () => {
  let component: ModalEditaPacienteComponent;
  let fixture: ComponentFixture<ModalEditaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
