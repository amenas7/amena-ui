import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaInputComponent } from './sa-input.component';

describe('SaInputComponent', () => {
  let component: SaInputComponent;
  let fixture: ComponentFixture<SaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
