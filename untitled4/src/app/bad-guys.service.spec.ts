import { TestBed } from '@angular/core/testing';

import { BadGuysService } from './bad-guys.service';

describe('BadGuysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BadGuysService = TestBed.get(BadGuysService);
    expect(service).toBeTruthy();
  });
});
