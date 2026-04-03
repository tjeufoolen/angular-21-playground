import { computed, Injectable, signal, Type } from '@angular/core';
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
  private readonly _current = signal<Type<StateComponent>>(WinkelwagenStateComponent);
  private readonly _history = signal<Type<StateComponent>[]>([]);
  private readonly _data = signal<ShoppingStateData>({
    gekozenProducten: [],
    verzendAdres: undefined,
    betaalMethode: undefined,
  });

  readonly current = this._current.asReadonly();
  readonly previous = computed(() => this._history()[0]);
  readonly data = this._data.asReadonly();

  setCurrentState(state: Type<StateComponent>): void {
    this._history.update((history) => {
      history.push(this.current());
      return history;
    });
    this._current.set(state);
  }

  revertToPreviousState(): void {
    if (this._history().length == 0) {
      return;
    }
    this._current.set(this._history().pop()!);
  }

  clearHistory(): void {
    console.log('Clearing history', this._history());
    this._history.set([]);
    console.log('Clearing history done!', this._history());
  }

  updateData(data: Partial<ShoppingStateData>): void {
    this._data.update((current) => ({ ...current, ...data }));
  }
}
