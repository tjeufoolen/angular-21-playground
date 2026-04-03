import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevestigdStateComponent } from './bevestigd.state.component';

describe('BevestigdStateComponent', () => {
  let component: BevestigdStateComponent;
  let fixture: ComponentFixture<BevestigdStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BevestigdStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BevestigdStateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
