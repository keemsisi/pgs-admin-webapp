import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionServerComponent } from './distribution-server.component';

describe('DistributionServerComponent', () => {
  let component: DistributionServerComponent;
  let fixture: ComponentFixture<DistributionServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
