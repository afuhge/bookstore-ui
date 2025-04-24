export class Books {
  public books: Array<Book> = [];
  public pageNumber: number = 1;
  public pageSize: number = 10;
  public totalEntries: number = 0;
  public totalPages: number = 0;
}

export class Book {
  public id!: string;
  public title!: string;
  public category: Category = new Category();
  public pages: number = 0;
  public spice: number = 0;
}

export class Category {
  public id!: string;
  public name!: string;
}
