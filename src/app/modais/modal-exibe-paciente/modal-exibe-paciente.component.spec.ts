import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExibePacienteComponent } from './modal-exibe-paciente.component';

describe('ModalExibePacienteComponent', () => {
  let component: ModalExibePacienteComponent;
  let fixture: ComponentFixture<ModalExibePacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExibePacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExibePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
