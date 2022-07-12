import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiBoxComponent } from './kpi-box.component';

describe('KpiBoxComponent', () => {
  let component: KpiBoxComponent;
  let fixture: ComponentFixture<KpiBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
