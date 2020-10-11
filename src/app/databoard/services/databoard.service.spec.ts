import { TestBed } from '@angular/core/testing';

import { DataboardService } from './databoard.service';

describe('DataboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataboardService = TestBed.get(DataboardService);
    expect(service).toBeTruthy();
  });
});
