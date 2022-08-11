import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundComponentComponent } from './background-component.component';

describe('BackgroundComponentComponent', () => {
  let component: BackgroundComponentComponent;
  let fixture: ComponentFixture<BackgroundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
