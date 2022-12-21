import { TestBed } from '@angular/core/testing';

import { UplaodService } from './uplaod.service';

describe('UplaodService', () => {
  let service: UplaodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UplaodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
