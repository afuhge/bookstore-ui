import { Component, input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NgClass, NgIf } from '@angular/common';
import { ButtonType } from '../../core/types/button-types';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'base-btn',
  imports: [NgClass, FaIconComponent, NgIf],
  templateUrl: './base-btn.component.html',
  styleUrl: './base-btn.component.css',
})
export class BaseBtnComponent {
  readonly icon = input<IconProp>();
  readonly text = input.required<string>();
  readonly type = input<string>(ButtonType.PRIMARY);
  readonly disabled = input<Boolean>(false);
  readonly fullWidth = input<Boolean>(false);
}
