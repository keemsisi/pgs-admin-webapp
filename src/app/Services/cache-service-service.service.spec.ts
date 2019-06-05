import { TestBed, inject } from '@angular/core/testing';

import { CacheService } from './cache-service-service.service';

describe('CacheServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheService]
    });
  });

  it('should be created', inject([CacheService], (service: CacheService) => {
    expect(service).toBeTruthy();
  }));
});
