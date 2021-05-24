import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperDashboardMainComponent } from './developer-dashboard-main.component';

describe('DeveloperDashboardMainComponent', () => {
  let component: DeveloperDashboardMainComponent;
  let fixture: ComponentFixture<DeveloperDashboardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperDashboardMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
