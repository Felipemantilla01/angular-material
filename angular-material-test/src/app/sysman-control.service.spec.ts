import { TestBed } from '@angular/core/testing';

import { SysmanControlService } from './sysman-control.service';

describe('SysmanControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SysmanControlService = TestBed.get(SysmanControlService);
    expect(service).toBeTruthy();
  });
});
