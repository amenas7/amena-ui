import { TestBed } from '@angular/core/testing';

import { SannaUiService } from './sanna-ui.service';

describe('SannaUiService', () => {
  let service: SannaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SannaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
