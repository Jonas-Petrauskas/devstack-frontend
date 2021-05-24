import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLogosComponent } from './company-logos.component';

describe('CompanyLogosComponent', () => {
  let component: CompanyLogosComponent;
  let fixture: ComponentFixture<CompanyLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyLogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
