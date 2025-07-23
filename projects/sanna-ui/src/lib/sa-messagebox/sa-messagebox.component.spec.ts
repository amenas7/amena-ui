import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaMessageboxComponent } from './sa-messagebox.component';

describe('SaMessageboxComponent', () => {
  let component: SaMessageboxComponent;
  let fixture: ComponentFixture<SaMessageboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaMessageboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaMessageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
