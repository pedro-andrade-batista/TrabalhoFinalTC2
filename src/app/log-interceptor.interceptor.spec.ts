import { TestBed } from '@angular/core/testing';

import { LogInterceptorInterceptor } from './log-interceptor.interceptor';

describe('LogInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LogInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LogInterceptorInterceptor = TestBed.inject(LogInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
