import { Component, inject, OnInit, signal } from '@angular/core';
import { BookService } from '../../../core/services/books/book.service';
import { Books } from '../../../core/services/books/books.model';

import { ActivatedRoute, Router } from '@angular/router';
import { EmptyPlaceholderComponent } from '../../../shared/empty-placeholder/empty-placeholder.component';
import { faBook, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BaseBtnComponent } from '../../../shared/base-btn/base-btn.component';
import { delay, finalize } from 'rxjs';
import { LoadingComponent } from '../../../shared/loading/loading.component';
import { LoadingTypes } from '../../../core/types/loading-types';
import { BadgeComponent } from '../../../shared/badge/badge.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-books-overview',
  imports: [
    EmptyPlaceholderComponent,
    BaseBtnComponent,
    LoadingComponent,
    BadgeComponent,
    TranslatePipe,
  ],
  templateUrl: './books-overview.component.html',
  styleUrl: './books-overview.component.css',
})
export class BooksOverviewComponent implements OnInit {
  public booksService = inject(BookService);
  public books: Books = new Books();
  public router: Router = inject(Router);
  public route: ActivatedRoute = inject(ActivatedRoute);
  public plus = faPlus;
  public book = faBook;
  public isLoading = signal(false);
  protected readonly LoadingTypes = LoadingTypes;

  ngOnInit(): void {
    this.isLoading.set(true);
    this.booksService
      .getBooks()
      .pipe(delay(400))
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe((books: Books) => {
        this.books = books;
      });
  }

  public goToUpdatePage() {
    this.router.navigate(['update'], { relativeTo: this.route });
  }
}
