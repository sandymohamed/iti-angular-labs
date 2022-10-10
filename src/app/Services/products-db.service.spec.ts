import { TestBed } from '@angular/core/testing';

import { ProductsDBService } from './products-db.service';

describe('ProductsDBService', () => {
  let service: ProductsDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
