import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewMoreDetailsComponent } from './user-view-more-details.component';

describe('UserViewMoreDetailsComponent', () => {
  let component: UserViewMoreDetailsComponent;
  let fixture: ComponentFixture<UserViewMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
