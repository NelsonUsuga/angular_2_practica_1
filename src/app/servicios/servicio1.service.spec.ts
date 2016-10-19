/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Servicio1Service } from './servicio1.service';

describe('Service: Servicio1', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Servicio1Service]
    });
  });

  it('should ...', inject([Servicio1Service], (service: Servicio1Service) => {
    expect(service).toBeTruthy();
  }));
});
