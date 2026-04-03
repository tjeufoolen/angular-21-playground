import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevestigenStateComponent } from './bevestigen.state.component';

describe('BevestigenStateComponent', () => {
  let component: BevestigenStateComponent;
  let fixture: ComponentFixture<BevestigenStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BevestigenStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BevestigenStateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
