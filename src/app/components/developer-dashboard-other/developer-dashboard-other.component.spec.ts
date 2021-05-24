import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperDashboardOtherComponent } from './developer-dashboard-other.component';

describe('DeveloperDashboardOtherComponent', () => {
  let component: DeveloperDashboardOtherComponent;
  let fixture: ComponentFixture<DeveloperDashboardOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperDashboardOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperDashboardOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
