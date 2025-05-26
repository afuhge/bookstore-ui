import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginStore } from '../stores/login.store';

export const authGuard: CanActivateFn = (route, state) => {
  const loginStore = inject(LoginStore);
  const router = inject(Router);
  return loginStore.loginState() ? true : !!router.navigate(['/login']);
};
