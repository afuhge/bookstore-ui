export interface ICategoryPaginatedResponseDTO {
  data: Array<ICategoryResponseDTO>;
  pageNumber: number;
  pageSize: number;
  totalEntries: number;
  totalPages: number;
}

export interface ICategoryResponseDTO {
  id: string;
  name: string;
  booksCount: number;
}

export interface ICategoryCreateRequestDTO {
  name: string;
}
