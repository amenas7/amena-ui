import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaTextComponent } from './sa-text.component';

describe('SaTextComponent', () => {
  let component: SaTextComponent;
  let fixture: ComponentFixture<SaTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
