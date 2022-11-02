import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPrefsComponent } from './counter-prefs.component';

describe('CounterPrefsComponent', () => {
  let component: CounterPrefsComponent;
  let fixture: ComponentFixture<CounterPrefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterPrefsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterPrefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
