import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoggedInService } from '../services/logged-in.service';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const loggedInService = inject(LoggedInService);
  const router = inject(Router);
  return loggedInService.isLoggedIn$.pipe(
    take(1),
    map((value) => {
      return value ? true : !!router.navigate(['/login']);
    })
  );
};
