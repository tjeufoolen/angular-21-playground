import { TestBed } from '@angular/core/testing';

import { ShoppingStateService } from './shopping-state.service';

describe('ShoppingStateService', () => {
  let service: ShoppingStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
