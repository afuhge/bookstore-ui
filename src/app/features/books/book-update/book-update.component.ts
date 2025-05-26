import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '@core/services/books/book.service';
import { IBookCreateRequestDTO } from '@core/services/books/books.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../core/services/books/books.model';
import { BaseBtnComponent } from '../../../shared/base-btn/base-btn.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-book-update',
  imports: [ReactiveFormsModule, BaseBtnComponent, NgIf, NgClass],
  templateUrl: './book-update.component.html',
})
export class BookUpdateComponent {
  public form = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl(''),
    pages: new FormControl(0, Validators.min(1)),
    spice: new FormControl(0, [Validators.min(0), Validators.max(5)]),
  });

  public bookService: BookService = inject(BookService);
  public router: Router = inject(Router);
  public route: ActivatedRoute = inject(ActivatedRoute);

  public save() {
    const bookDto: IBookCreateRequestDTO = {
      title: this.form.value.title!,
      spice: this.form.value.spice ?? 0,
      pages: this.form.value.pages ?? 0,
      categoryId: this.form.value.category ?? undefined,
    };

    this.bookService.createBook(bookDto).subscribe((book: Book) => {
      console.log(book);
      this.router.navigate([''], { relativeTo: this.route }).then();
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
