import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectComponentComponent } from './form-select-component.component';

describe('FormSelectComponentComponent', () => {
  let component: FormSelectComponentComponent;
  let fixture: ComponentFixture<FormSelectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSelectComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
