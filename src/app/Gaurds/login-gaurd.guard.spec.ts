import { TestBed, async, inject } from '@angular/core/testing';

import { LoginGaurdGuard } from './login-gaurd.guard';

describe('LoginGaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGaurdGuard]
    });
  });

  it('should ...', inject([LoginGaurdGuard], (guard: LoginGaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
