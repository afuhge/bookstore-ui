import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'menu-item',
  imports: [FaIconComponent, RouterLink, RouterLinkActive],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  readonly icon = input.required<IconProp>();
  readonly label = input.required<string>();
  readonly routeName = input.required<string>();
}
