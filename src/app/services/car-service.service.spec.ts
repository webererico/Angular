import { TestBed } from '@angular/core/testing';

import { CarService } from './car-service.service';

describe('CarServiceService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
