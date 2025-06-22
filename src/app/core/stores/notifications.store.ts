import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed } from '@angular/core';
import { Notification } from '../types/notification-types';

type NotificationsState = {
  items: Notification[];
};

const initialState: NotificationsState = {
  items: [],
};

export const NotificationsStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((store) => ({
    notifications: computed(() => store.items),
  })),

  withMethods((store) => ({
    addNotification(notification: Notification): void {
      patchState(store, {
        items: [...store.items(), notification],
      });
    },
    removeNotification(): void {
      patchState(store, {
        items: store.items().slice(1), // removes the first item
      });
    },
  }))
);
