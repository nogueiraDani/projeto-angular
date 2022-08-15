import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormButtonComponentComponent } from './form-button-component.component';

describe('FormButtonComponentComponent', () => {
  let component: FormButtonComponentComponent;
  let fixture: ComponentFixture<FormButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormButtonComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
