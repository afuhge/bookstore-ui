import { Component, input } from '@angular/core';
import { NotificationTypes } from '../../core/types/notification-types';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faExclamationTriangle,
  faInfoCircle,
  faSquareXmark,
} from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';

@Component({
  selector: 'notification',
  imports: [FaIconComponent, NgClass],
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  readonly type = input<NotificationTypes>(NotificationTypes.ERROR);
  readonly message = input<string>('Error');
  public error = faSquareXmark;
  public warning = faExclamationTriangle;
  public info = faInfoCircle;
  public success = faCheck;
  protected readonly NotificationTypes = NotificationTypes;
}
