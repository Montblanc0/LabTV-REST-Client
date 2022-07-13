import { TestBed } from '@angular/core/testing';

import { OneTimeService } from './one-time.service';

describe('OneTimeService', () => {
  let service: OneTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
