import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTitleComponentComponent } from './form-title-component.component';

describe('FormTitleComponentComponent', () => {
  let component: FormTitleComponentComponent;
  let fixture: ComponentFixture<FormTitleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTitleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTitleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
