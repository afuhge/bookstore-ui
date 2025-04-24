export interface IBookPaginatedResponseDTO {
  data: Array<IBookResponseDTO>;
  pageNumber: number;
  pageSize: number;
  totalEntries: number;
  totalPages: number;
}

export interface IBookResponseDTO {
  id: string;
  title: string;
  category: ICategoryBookResponseDTO;
  pages: number;
  spice: number;
}

export interface ICategoryBookResponseDTO {
  id: string;
  name: string;
}

export interface IBookCreateRequestDTO {
  title: string;
  categoryId?: string;
  pages: number;
  spice: number;
}
