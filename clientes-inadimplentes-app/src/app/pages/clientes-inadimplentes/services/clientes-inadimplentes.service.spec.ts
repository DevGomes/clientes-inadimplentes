import { TestBed } from '@angular/core/testing';

import { ClientesInadimplentesService } from './clientes-inadimplentes.service';

describe('ClientesInadimplentesService', () => {
  let service: ClientesInadimplentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesInadimplentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
