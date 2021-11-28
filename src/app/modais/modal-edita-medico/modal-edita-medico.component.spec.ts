import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditaMedicoComponent } from './modal-edita-medico.component';

describe('ModalEditaMedicoComponent', () => {
  let component: ModalEditaMedicoComponent;
  let fixture: ComponentFixture<ModalEditaMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditaMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
