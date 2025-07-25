import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaHeadingComponent } from './sa-heading.component';

describe('SaHeadingComponent', () => {
  let component: SaHeadingComponent;
  let fixture: ComponentFixture<SaHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaHeadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
