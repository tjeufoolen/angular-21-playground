import { Component } from '@angular/core';
import { StateComponent } from '../state.component';
import { BevestigdStateComponent } from '../bevestigd/bevestigd.state.component';

@Component({
  selector: 'app-bevestigen.state.component',
  imports: [],
  templateUrl: './bevestigen.state.component.html',
  styleUrl: './bevestigen.state.component.scss',
})
export class BevestigenStateComponent extends StateComponent {
  plaatsBestelling() {
    this.shoppingStateService.setCurrentState(BevestigdStateComponent);
  }
}
