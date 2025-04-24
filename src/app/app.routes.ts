import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'bookstore',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      {
        path: 'books',
        loadChildren: () =>
          import('./features/books/books.routes').then((m) => m.BOOKS_ROUTES),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./features/categories/categories.routes').then(
            (m) => m.CATEGORIES_ROUTES
          ),
      },
    ],
  },
  {
    path: 'imprint',
    loadComponent: () =>
      import('./features/imprint/imprint.component').then(
        (m) => m.ImprintComponent
      ),
  },
  { path: '', redirectTo: 'bookstore', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./features/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
