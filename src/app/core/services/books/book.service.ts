import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IBookCreateRequestDTO,
  IBookPaginatedResponseDTO,
  IBookResponseDTO,
} from './books.interfaces';
import { catchError, map, tap } from 'rxjs';
import { BooksMapper } from './books.mapper';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  private BOOK_URL = 'http://localhost:4200/api/v1/books';

  getBooks() {
    return this.http.get<IBookPaginatedResponseDTO>(this.BOOK_URL).pipe(
      map((booksDTO) => BooksMapper.mapBooksDTOToBooks(booksDTO)),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }

  createBook(bookDto: IBookCreateRequestDTO) {
    return this.http.post<IBookResponseDTO>(this.BOOK_URL, bookDto).pipe(
      map((bookDTO) => BooksMapper.mapBookDTOToBook(bookDTO)),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }
}
