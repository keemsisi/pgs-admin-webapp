import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashBoardContainerComponent } from './admin-dash-board-container.component';

describe('AdminDashBoardContainerComponent', () => {
  let component: AdminDashBoardContainerComponent;
  let fixture: ComponentFixture<AdminDashBoardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashBoardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashBoardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
