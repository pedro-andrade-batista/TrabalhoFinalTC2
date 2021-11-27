import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoModalExibirComponent } from './conteudo-modal-exibir.component';

describe('ConteudoModalExibirComponent', () => {
  let component: ConteudoModalExibirComponent;
  let fixture: ComponentFixture<ConteudoModalExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoModalExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoModalExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
