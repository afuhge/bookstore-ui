import {
  IBookPaginatedResponseDTO,
  IBookResponseDTO,
} from './books.interfaces';
import { Book, Books } from './books.model';

export class BooksMapper {
  public static mapBooksDTOToBooks(booksDTO: IBookPaginatedResponseDTO): Books {
    return {
      books: booksDTO.data.map(this.mapBookDTOToBook),
      pageNumber: booksDTO.pageNumber,
      pageSize: booksDTO.pageSize,
      totalEntries: booksDTO.totalEntries,
      totalPages: booksDTO.totalPages,
    } as Books;
  }

  public static mapBookDTOToBook(bookDTO: IBookResponseDTO): Book {
    return {
      id: bookDTO.id,
      title: bookDTO.title,
      pages: bookDTO.pages,
      spice: bookDTO.spice,
      category: bookDTO.category
        ? {
            id: bookDTO.category.id,
            name: bookDTO.category.name,
          }
        : null,
    } as Book;
  }
}
