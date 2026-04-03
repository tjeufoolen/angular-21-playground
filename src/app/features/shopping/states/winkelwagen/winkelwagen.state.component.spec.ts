import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkelwagenStateComponent } from './winkelwagen.state.component';

describe('WinkelwagenStateComponent', () => {
  let component: WinkelwagenStateComponent;
  let fixture: ComponentFixture<WinkelwagenStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinkelwagenStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WinkelwagenStateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
