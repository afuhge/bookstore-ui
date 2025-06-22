import { Component, inject, signal } from '@angular/core';
import { BaseBtnComponent } from '../../../shared/base-btn/base-btn.component';
import { NgClass } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../core/services/categories/category-service.service';
import { ICategoryCreateRequestDTO } from '../../../core/services/categories/categories.interfaces';
import { Category } from '../../../core/services/categories/categories.model';
import { finalize } from 'rxjs';
import { NotificationsStore } from '../../../core/stores/notifications.store';
import { NotificationTypes } from '../../../core/types/notification-types';

@Component({
  selector: 'app-categories-details',
  imports: [BaseBtnComponent, ReactiveFormsModule, NgClass],
  templateUrl: './categories-details.component.html',
})
export class CategoriesDetailsComponent {
  public form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  public categoryService: CategoryService = inject(CategoryService);
  public notificationStore = inject(NotificationsStore);
  public router: Router = inject(Router);
  public route: ActivatedRoute = inject(ActivatedRoute);
  public btnLoading = signal(false);

  public save() {
    this.btnLoading.set(true);
    const categoryDTO: ICategoryCreateRequestDTO = {
      name: this.form.value.name!,
    };

    this.notificationStore.addNotification({
      type: NotificationTypes.SUCCESS,
      message: 'Category successful created',
    });

    this.categoryService
      .createCategory(categoryDTO)
      .pipe(finalize(() => this.btnLoading.set(false)))
      .subscribe({
        next: (category: Category) => {
          console.log(category);
          
          this.btnLoading.set(true);
          this.router.navigate(['../'], { relativeTo: this.route }).then();
        },
        error: (err) => {
          console.error('Category creation failed:', err);
        },
      });
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
