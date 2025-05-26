import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ThemeStore } from './core/stores/theme.store';
import { LoginStore } from './core/stores/login.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bookstore-ui';
  private themeStore = inject(ThemeStore);
  private loginStore = inject(LoginStore);
  private localStorageKey = 'theme-preference';

  constructor() {
    effect(() => {
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify({ isDark: this.themeStore.isDarkMode() })
      );
      const selectedTheme = this.themeStore.isDarkMode() ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', selectedTheme);
    });

    effect(() => {
      localStorage.setItem(
        'loggedIn',
        JSON.stringify(this.loginStore.loginState())
      );
    });
  }
}
