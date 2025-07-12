import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SannaUiComponent } from './sanna-ui.component';

describe('SannaUiComponent', () => {
  let component: SannaUiComponent;
  let fixture: ComponentFixture<SannaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SannaUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SannaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
