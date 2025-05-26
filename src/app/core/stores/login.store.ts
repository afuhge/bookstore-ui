import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed } from '@angular/core';

type LoginState = {
  isLoggedIn: boolean;
};

const localStorageKey = 'loggedIn';
const stored = localStorage.getItem(localStorageKey);
const initialState: LoginState = {
  isLoggedIn: stored ? JSON.parse(stored) : false,
};

export const LoginStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    loginState: computed(() => store.isLoggedIn()),
  })),
  withMethods((store) => ({
    setLoginState(value: boolean): void {
      patchState(store, { isLoggedIn: value });
    },
  }))
);
