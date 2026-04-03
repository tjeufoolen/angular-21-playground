import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzendgegevensStateComponent } from './verzendgegevens.state.component';

describe('VerzendgegevensStateComponent', () => {
  let component: VerzendgegevensStateComponent;
  let fixture: ComponentFixture<VerzendgegevensStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerzendgegevensStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerzendgegevensStateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
