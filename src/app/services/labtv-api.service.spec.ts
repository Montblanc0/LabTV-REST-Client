import { TestBed } from '@angular/core/testing';

import { LabtvApiService } from './labtv-api.service';

describe('LabtvApiService', () => {
  let service: LabtvApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabtvApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
