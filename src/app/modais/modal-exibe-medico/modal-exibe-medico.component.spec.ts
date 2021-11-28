import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExibeMedicoComponent } from './modal-exibe-medico.component';

describe('ModalExibeMedicoComponent', () => {
  let component: ModalExibeMedicoComponent;
  let fixture: ComponentFixture<ModalExibeMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExibeMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExibeMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
