import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'badge',
  imports: [NgClass],
  templateUrl: './badge.component.html',
})
export class BadgeComponent {
  public active = input<boolean>(false);
}
