import { TestBed } from '@angular/core/testing';

import { UploadFileServiceService } from './upload-file-service.service';

describe('UploadFileServiceService', () => {
  let service: UploadFileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadFileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
