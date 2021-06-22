import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesInadimplentesComponent } from './clientes-inadimplentes.component';

describe('ClientesInadimplentesComponent', () => {
  let component: ClientesInadimplentesComponent;
  let fixture: ComponentFixture<ClientesInadimplentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesInadimplentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesInadimplentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
