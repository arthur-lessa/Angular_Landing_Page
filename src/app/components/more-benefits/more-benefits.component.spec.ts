import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBenefitsComponent } from './more-benefits.component';

describe('MoreBenefitsComponent', () => {
  let component: MoreBenefitsComponent;
  let fixture: ComponentFixture<MoreBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
