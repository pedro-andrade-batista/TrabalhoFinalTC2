import { TestBed } from '@angular/core/testing';

import { APIconnectionService } from './apiconnection.service';

describe('APIconnectionService', () => {
  let service: APIconnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIconnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
