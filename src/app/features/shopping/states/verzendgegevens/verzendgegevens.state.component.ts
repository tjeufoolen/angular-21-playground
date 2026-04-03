import { Component } from '@angular/core';
import { StateComponent } from '../state.component';
import { BetaalMethodeStateComponent } from '../betaal-methode/betaal-methode.state.component';

@Component({
  selector: 'app-verzendgegevens.state.component',
  imports: [],
  templateUrl: './verzendgegevens.state.component.html',
  styleUrl: './verzendgegevens.state.component.scss',
})
export class VerzendgegevensStateComponent extends StateComponent {
  terug(): void {
    this.shoppingStateService.revertToPreviousState();
  }

  volgende(): void {
    this.shoppingStateService.setCurrentState(BetaalMethodeStateComponent);
  }
}
