import { Component, inject, OnInit, signal } from '@angular/core';
import { BookService } from '../../../core/services/books/book.service';
import { Books } from '../../../core/services/books/books.model';
import { NgForOf, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EmptyPlaceholderComponent } from '../../../shared/empty-placeholder/empty-placeholder.component';
import { faBook, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BaseBtnComponent } from '../../../shared/base-btn/base-btn.component';
import { delay } from 'rxjs';
import { LoadingComponent } from '../../../shared/loading/loading.component';

@Component({
  selector: 'app-books-overview',
  imports: [
    NgForOf,
    NgIf,
    EmptyPlaceholderComponent,
    BaseBtnComponent,
    LoadingComponent,
  ],
  templateUrl: './books-overview.component.html',
  styleUrl: './books-overview.component.css',
})
export class BooksOverviewComponent implements OnInit {
  public booksService = inject(BookService);
  public books!: Books;
  public router: Router = inject(Router);
  public route: ActivatedRoute = inject(ActivatedRoute);
  public plus = faPlus;
  public book = faBook;
  public isLoading = signal(false);

  ngOnInit(): void {
    this.isLoading.set(true);
    this.booksService
      .getBooks()
      .pipe(delay(400))
      .subscribe((books: Books) => {
        this.books = books;
        this.isLoading.set(false);
      });
  }

  public goToUpdatePage() {
    this.router.navigate(['update'], { relativeTo: this.route });
  }
}
