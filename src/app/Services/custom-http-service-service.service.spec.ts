import { TestBed, inject } from '@angular/core/testing';

import { CustomHttpServiceServiceService } from './custom-http-service-service.service';

describe('CustomHttpServiceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomHttpServiceServiceService]
    });
  });

  it('should be created', inject([CustomHttpServiceServiceService], (service: CustomHttpServiceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
