import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

export const serverErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        console.log('Successful response:', event);
      }
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 500) {
        // todo: toast
        console.error('Internal Server Error (500)');
      }

      return throwError(() => error); // Important: rethrow so consumers can still handle it
    })
  );
};
