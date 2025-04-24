import { Routes } from '@angular/router';

export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./books-overview/books-overview.component').then(
        (m) => m.BooksOverviewComponent
      ),
  }, // Default route for the books feature
  {
    path: 'update',
    loadComponent: () =>
      import('./book-update/book-update.component').then(
        (m) => m.BookUpdateComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./books-details/books-details.component').then(
        (m) => m.BooksDetailsComponent
      ),
  }, // Default route for the books feature
];
