import { Component } from '@angular/core';
import { StateComponent } from '../state.component';
import { BevestigenStateComponent } from '../bevestigen/bevestigen.state.component';

@Component({
  selector: 'app-betaal-methode.state.component',
  imports: [],
  templateUrl: './betaal-methode.state.component.html',
  styleUrl: './betaal-methode.state.component.scss',
})
export class BetaalMethodeStateComponent extends StateComponent {
  terug(): void {
    this.shoppingStateService.revertToPreviousState();
  }

  volgende(): void {
    this.shoppingStateService.setCurrentState(BevestigenStateComponent);
  }
}
