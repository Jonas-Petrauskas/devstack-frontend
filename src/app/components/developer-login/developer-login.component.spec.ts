import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperLoginComponent } from './developer-login.component';

describe('DeveloperLoginComponent', () => {
  let component: DeveloperLoginComponent;
  let fixture: ComponentFixture<DeveloperLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
