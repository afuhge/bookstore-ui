import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'loading',
  imports: [NgClass],
  templateUrl: './loading.component.html',
})
export class LoadingComponent {
  readonly height = input<string>('h-10');
  readonly width = input<string>('w-full');
}
