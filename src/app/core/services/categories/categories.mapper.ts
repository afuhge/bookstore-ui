import {
  ICategoryPaginatedResponseDTO,
  ICategoryResponseDTO,
} from './categories.interfaces';
import { Categories, Category } from './categories.model';

export class CategoriesMapper {
  public static mapCategoriesDTOToCategories(
    categoriesDTO: ICategoryPaginatedResponseDTO
  ): Categories {
    return {
      categories: categoriesDTO.data.map(this.mapCategoryDTOToCategory),
      pageNumber: categoriesDTO.pageNumber,
      pageSize: categoriesDTO.pageSize,
      totalEntries: categoriesDTO.totalEntries,
      totalPages: categoriesDTO.totalPages,
    } as Categories;
  }

  public static mapCategoryDTOToCategory(
    categoriesDTO: ICategoryResponseDTO
  ): Category {
    return {
      id: categoriesDTO.id,
      name: categoriesDTO.name,
      booksCount: categoriesDTO.booksCount,
    } as Category;
  }
}
