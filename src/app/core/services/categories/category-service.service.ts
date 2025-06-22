import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import {
  ICategoryCreateRequestDTO,
  ICategoryPaginatedResponseDTO,
  ICategoryResponseDTO,
} from './categories.interfaces';
import { CategoriesMapper } from './categories.mapper';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  private CATEGORY_URL = 'http://localhost:4200/api/v1/categories';

  getCategories() {
    return this.http.get<ICategoryPaginatedResponseDTO>(this.CATEGORY_URL).pipe(
      map((categoryDTO) =>
        CategoriesMapper.mapCategoriesDTOToCategories(categoryDTO)
      ),
      catchError((err) => {
        throw err;
      })
    );
  }

  createCategory(categoryDTO: ICategoryCreateRequestDTO) {
    return this.http
      .post<ICategoryResponseDTO>(this.CATEGORY_URL, categoryDTO)
      .pipe(
        map((categoryResponseDTO) =>
          CategoriesMapper.mapCategoryDTOToCategory(categoryResponseDTO)
        ),
        catchError((err) => {
          throw err;
        })
      );
  }
}
