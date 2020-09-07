import { TestBed, inject } from '@angular/core/testing';
import { OfferService } from './offer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('OfferService', () => {
  let service: OfferService;
  let httpTestingMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OfferService]
    });
    service = TestBed.inject(OfferService);
  });

  beforeEach(inject(
    [OfferService, HttpTestingController],
    (offerService, httpMock) => {
      service = offerService;
      httpTestingMock = httpMock;
    }
  ));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
