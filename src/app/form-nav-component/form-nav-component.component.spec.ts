import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNavComponentComponent } from './form-nav-component.component';

describe('FormNavComponentComponent', () => {
  let component: FormNavComponentComponent;
  let fixture: ComponentFixture<FormNavComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNavComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
