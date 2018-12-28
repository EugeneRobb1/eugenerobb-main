import { TestBed } from '@angular/core/testing';

import { EducationdataService } from './educationdata.service';

describe('EducationdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducationdataService = TestBed.get(EducationdataService);
    expect(service).toBeTruthy();
  });
});
