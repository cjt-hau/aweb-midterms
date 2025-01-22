import { TestBed } from '@angular/core/testing';

import { AnotherserviceService } from './anotherservice.service';

describe('AnotherserviceService', () => {
  let service: AnotherserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotherserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
