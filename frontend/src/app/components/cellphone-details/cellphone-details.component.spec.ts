import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellphoneDetailsComponent } from './cellphone-details.component';

describe('CellphoneDetailsComponent', () => {
  let component: CellphoneDetailsComponent;
  let fixture: ComponentFixture<CellphoneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellphoneDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellphoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
