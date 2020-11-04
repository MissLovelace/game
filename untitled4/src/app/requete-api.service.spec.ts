import { TestBed } from '@angular/core/testing';

import { RequeteApiService } from './requete-api.service';

describe('RequeteApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequeteApiService = TestBed.get(RequeteApiService);
    expect(service).toBeTruthy();
  });
});
