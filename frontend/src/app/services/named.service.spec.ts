import { TestBed } from '@angular/core/testing';

import { NamedService } from './named.service';

describe('NamedService', () => {
  let service: NamedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
