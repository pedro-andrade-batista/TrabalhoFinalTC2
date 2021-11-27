import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarMedicoComponent } from './modal-editar-medico.component';

describe('ModalEditarMedicoComponent', () => {
  let component: ModalEditarMedicoComponent;
  let fixture: ComponentFixture<ModalEditarMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
