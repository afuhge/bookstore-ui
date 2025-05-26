import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed } from '@angular/core';

type ThemeState = {
  isDark: boolean;
};

// Try to load the initial state from localStorage
const localStorageKey = 'theme-preference';
const stored = localStorage.getItem(localStorageKey);
const initialState: ThemeState = {
  isDark: stored ? JSON.parse(stored).isDark : false,
};

export const ThemeStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((store) => ({
    isDarkMode: computed(() => store.isDark()),
  })),

  withMethods((store) => ({
    toggleTheme(): void {
      patchState(store, { isDark: !store.isDark() });
    },
    setDarkMode(value: boolean): void {
      patchState(store, { isDark: value });
    },
  }))
);
