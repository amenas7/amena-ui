import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaIconComponent } from './sa-icon.component';

describe('SaIconComponent', () => {
  let component: SaIconComponent;
  let fixture: ComponentFixture<SaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
