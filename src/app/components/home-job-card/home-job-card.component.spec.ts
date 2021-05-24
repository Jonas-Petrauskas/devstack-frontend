import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJobCardComponent } from './home-job-card.component';

describe('HomeJobCardComponent', () => {
  let component: HomeJobCardComponent;
  let fixture: ComponentFixture<HomeJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeJobCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
