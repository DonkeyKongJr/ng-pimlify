import { TestBed } from '@angular/core/testing';

import { UserBasketService } from './user-basket.service';

describe('UserBasketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserBasketService = TestBed.get(UserBasketService);
    expect(service).toBeTruthy();
  });
});
