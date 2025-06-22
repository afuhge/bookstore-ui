import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBook,
  faBookOpen,
  faKey,
  faList,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { BaseBtnComponent } from '../base-btn/base-btn.component';
import { ButtonType } from '../../core/types/button-types';
import { LoginStore } from '../../core/stores/login.store';
import { ThemeStore } from '../../core/stores/theme.store';

@Component({
  selector: 'app-header',
  imports: [FaIconComponent, MenuItemComponent, BaseBtnComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public faBook = faBookOpen;
  public books = faBook;
  public category = faList;
  public login = faKey;
  public sun = faSun;
  public moon = faMoon;
  public loginStore = inject(LoginStore);
  public themeStore = inject(ThemeStore);
  public router = inject(Router);
  protected readonly ButtonType = ButtonType;

  get isLoggedIn() {
    return this.loginStore.loginState();
  }

  get isDark() {
    return this.themeStore.isDark();
  }

  public handleLogout() {
    this.loginStore.setLoginState(false);
    this.router.navigate(['/login']);
  }

  public switchTheme() {
    // todo: create theme service
    this.themeStore.toggleTheme();
  }
}
