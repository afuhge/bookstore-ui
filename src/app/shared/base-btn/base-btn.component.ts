import { Component, input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NgClass } from '@angular/common';
import { ButtonType } from '../../core/types/button-types';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { LoadingTypes } from '../../core/types/loading-types';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'base-btn',
  imports: [NgClass, FaIconComponent, LoadingComponent],
  templateUrl: './base-btn.component.html',
  styleUrl: './base-btn.component.css',
})
export class BaseBtnComponent {
  readonly icon = input<IconProp>();
  readonly text = input.required<string>();
  readonly type = input<string>(ButtonType.PRIMARY);
  readonly disabled = input<Boolean>(false);
  readonly fullWidth = input<Boolean>(false);
  readonly loading = input<Boolean>(false);
  protected readonly LoadingTypes = LoadingTypes;
}
