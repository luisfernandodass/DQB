import { TestBed } from '@angular/core/testing';

import { DolarQuotationService } from './dolar-quotation.service';

describe('DolarQuotationService', () => {
  let service: DolarQuotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DolarQuotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
