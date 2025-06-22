import { Component, inject, OnInit, signal } from '@angular/core';
import { BaseBtnComponent } from '../../../shared/base-btn/base-btn.component';
import { EmptyPlaceholderComponent } from '../../../shared/empty-placeholder/empty-placeholder.component';
import { LoadingComponent } from '../../../shared/loading/loading.component';

import { ActivatedRoute, Router } from '@angular/router';
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { delay, finalize } from 'rxjs';
import { CategoryService } from '../../../core/services/categories/category-service.service';
import { Categories } from '../../../core/services/categories/categories.model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-categories-overview',
  imports: [
    BaseBtnComponent,
    EmptyPlaceholderComponent,
    LoadingComponent,
    TranslatePipe,
  ],
  templateUrl: './categories-overview.component.html',
})
export class CategoriesOverviewComponent implements OnInit {
  public categoryService = inject(CategoryService);
  public categories: Categories = new Categories();
  public router: Router = inject(Router);
  public route: ActivatedRoute = inject(ActivatedRoute);
  public plus = faPlus;
  public list = faList;
  public isLoading = signal(false);

  ngOnInit(): void {
    this.isLoading.set(true);
    this.categoryService
      .getCategories()
      .pipe(delay(400))
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe((categories: Categories) => {
        this.categories = categories;
      });
  }

  public goToUpdatePage() {
    this.router.navigate(['update'], { relativeTo: this.route });
  }
}
