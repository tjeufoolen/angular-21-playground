import { Injectable, signal } from '@angular/core';
import { WinkelwagenStateComponent } from './states/winkelwagen/winkelwagen.state.component';
import { StateComponent } from './states/state.component';

export interface ShoppingStateData {
  gekozenProducten: string[];
  verzendAdres: string | undefined;
  betaalMethode: 'ideal' | 'applepay' | 'paypal' | undefined;
};

@Injectable({
  providedIn: 'root',
})
export class ShoppingStateService {
  private readonly _current = signal<StateComponent>(WinkelwagenStateComponent);
  private readonly _previous = signal<StateComponent | undefined>(undefined);
  private readonly _data = signal<ShoppingStateData>({
    gekozenProducten: [],
    verzendAdres: undefined,
    betaalMethode: undefined,
  });

  readonly current = this._current;
  readonly previous = this._previous.asReadonly();
  readonly data = this._data.asReadonly();

  setCurrentState(state: StateComponent): void {
    this._previous.set(this.current());
    this._current.set(state);
  }

  updateData(data: Partial<ShoppingStateData>): void {
    this._data.update((current) => ({ ...current, ...data }));
  }
}
