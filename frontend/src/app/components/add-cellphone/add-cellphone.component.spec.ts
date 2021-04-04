import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCellphoneComponent } from './add-cellphone.component';

describe('AddCellphoneComponent', () => {
  let component: AddCellphoneComponent;
  let fixture: ComponentFixture<AddCellphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCellphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCellphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
