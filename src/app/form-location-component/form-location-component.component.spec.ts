import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLocationComponentComponent } from './form-location-component.component';

describe('FormLocationComponentComponent', () => {
  let component: FormLocationComponentComponent;
  let fixture: ComponentFixture<FormLocationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLocationComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLocationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
