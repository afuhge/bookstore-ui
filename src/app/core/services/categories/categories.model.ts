export class Categories {
  public categories: Array<Category> = [];
  public pageNumber: number = 1;
  public pageSize: number = 10;
  public totalEntries: number = 0;
  public totalPages: number = 0;
}

export class Category {
  public id!: string;
  public name!: string;
  public booksCount: number = 0;
}
