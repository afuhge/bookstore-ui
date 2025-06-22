import { Component, inject, signal } from '@angular/core';
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
import { NgClass } from '@angular/common';
import { finalize } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-book-update',
  imports: [ReactiveFormsModule, BaseBtnComponent, NgClass, TranslatePipe],
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent {
  public form = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl(''),
    pages: new FormControl(0, Validators.min(1)),
    spice: new FormControl(0, [Validators.min(0), Validators.max(5)]),
  });

  public bookService: BookService = inject(BookService);
  public router: Router = inject(Router);
  public route: ActivatedRoute = inject(ActivatedRoute);
  public btnLoading = signal(false);

  public save() {
    this.btnLoading.set(true);
    const bookDto: IBookCreateRequestDTO = {
      title: this.form.value.title!,
      spice: this.form.value.spice ?? 0,
      pages: this.form.value.pages ?? 0,
      categoryId: this.form.value.category ?? undefined,
    };

    this.bookService
      .createBook(bookDto)
      .pipe(finalize(() => this.btnLoading.set(false)))
      .subscribe({
        next: (book: Book) => {
          this.router.navigate([''], { relativeTo: this.route }).then();
        },
        error: (err) => {
          console.error('book creation failed:', err);
        },
      });
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
