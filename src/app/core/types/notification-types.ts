export enum NotificationTypes {
  INFO = 'notification-info',
  WARNING = 'notification-warning',
  ERROR = 'notification-error',
  SUCCESS = 'notification-success',
}

export type Notification = {
  type: NotificationTypes;
  message: string;
};
