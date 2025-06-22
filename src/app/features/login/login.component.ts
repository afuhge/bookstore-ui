import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BaseBtnComponent } from '../../shared/base-btn/base-btn.component';
import { ButtonType } from '../../core/types/button-types';
import { LoginStore } from '../../core/stores/login.store';

@Component({
  selector: 'app-login',
  imports: [BaseBtnComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  ButtonType = ButtonType;
  readonly loginStore = inject(LoginStore);
  private router = inject(Router);

  public login() {
    this.loginStore.setLoginState(true);
    this.router.navigate(['/bookstore']);
  }
}
