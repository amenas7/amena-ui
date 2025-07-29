import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaTableComponent } from './sa-table.component';

describe('SaTableComponent', () => {
  let component: SaTableComponent;
  let fixture: ComponentFixture<SaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
