import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../../../core/services/books/book.service';
import { Books } from '../../../core/services/books/books.model';
import { NgForOf, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-books-overview',
  imports: [NgForOf, NgIf],
  templateUrl: './books-overview.component.html',
  styleUrl: './books-overview.component.css',
})
export class BooksOverviewComponent implements OnInit {
  public booksService = inject(BookService);
  public books!: Books;

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((books: Books) => {
      this.books = books;
    });
  }

  public router: Router = inject(Router);
  public route: ActivatedRoute = inject(ActivatedRoute);

  public goToUpdatePage() {
    this.router.navigate(['update'], { relativeTo: this.route });
  }
}
