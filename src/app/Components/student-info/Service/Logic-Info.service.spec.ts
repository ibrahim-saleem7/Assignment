/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogicInfoService } from './Logic-Info.service';

describe('Service: LogicInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogicInfoService]
    });
  });

  it('should ...', inject([LogicInfoService], (service: LogicInfoService) => {
    expect(service).toBeTruthy();
  }));
});
