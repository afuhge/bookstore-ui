import { Routes } from '@angular/router';

export const CATEGORIES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./categories-overview/categories-overview.component').then(
        (m) => m.CategoriesOverviewComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./categories-details/categories-details.component').then(
        (m) => m.CategoriesDetailsComponent
      ),
  },
];
