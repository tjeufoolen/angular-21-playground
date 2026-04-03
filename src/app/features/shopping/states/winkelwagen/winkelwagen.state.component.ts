import { Component } from '@angular/core';
import { StateComponent } from '../state.component';
import { VerzendgegevensStateComponent } from '../verzendgegevens/verzendgegevens.state.component';

@Component({
  selector: 'app-winkelwagen.state.component',
  imports: [],
  templateUrl: './winkelwagen.state.component.html',
  styleUrl: './winkelwagen.state.component.scss',
})
export class WinkelwagenStateComponent extends StateComponent {
  volgende(): void {
    this.shoppingStateService.setCurrentState(VerzendgegevensStateComponent);
  }
}
