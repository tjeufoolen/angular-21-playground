import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaalMethodeStateComponent } from './betaal-methode.state.component';

describe('BetaalmethodeStateComponent', () => {
  let component: BetaalMethodeStateComponent;
  let fixture: ComponentFixture<BetaalMethodeStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetaalMethodeStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BetaalMethodeStateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
