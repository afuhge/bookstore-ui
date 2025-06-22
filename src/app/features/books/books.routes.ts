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
      import('./book-details/book-details.component').then(
        (m) => m.BookDetailsComponent
      ),
  },
  {
    path: 'update/:id',
    loadComponent: () =>
      import('./book-details/book-details.component').then(
        (m) => m.BookDetailsComponent
      ),
  }, // Default route for the books feature
];
