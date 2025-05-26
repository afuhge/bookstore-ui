import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'empty-placeholder',
  imports: [FaIconComponent],
  templateUrl: './empty-placeholder.component.html',
})
export class EmptyPlaceholderComponent {
  public search = faSearch;
  readonly icon = input<IconProp>(this.search);
  readonly title = input<string>('No items available');
  readonly description = input<string>(
    'At the moment there are no items available. Please try again later.'
  );
}
