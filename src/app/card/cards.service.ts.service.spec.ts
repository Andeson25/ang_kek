/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Cards.service.tsService } from './cards.service.ts.service';

describe('Service: Cards.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cards.service.tsService]
    });
  });

  it('should ...', inject([Cards.service.tsService], (service: Cards.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});