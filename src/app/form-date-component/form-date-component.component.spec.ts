import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDateComponentComponent } from './form-date-component.component';

describe('FormDateComponentComponent', () => {
  let component: FormDateComponentComponent;
  let fixture: ComponentFixture<FormDateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDateComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
