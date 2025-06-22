import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ThemeStore } from './core/stores/theme.store';
import { LoginStore } from './core/stores/login.store';
import { NotificationComponent } from './shared/notification/notification.component';

import { NotificationsStore } from './core/stores/notifications.store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bookstore-ui';
  public notificationStore = inject(NotificationsStore);
  public translateService = inject(TranslateService);
  private themeStore = inject(ThemeStore);
  private loginStore = inject(LoginStore);
  private localStorageKey = 'theme-preference';

  constructor() {
    this.translateService.addLangs(['de', 'en']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('de');

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

    let timeoutId: any;

    effect(() => {
      const items = this.notificationStore.items();
      clearTimeout(timeoutId); // Clear any existing timeouts

      if (items.length > 0) {
        timeoutId = setTimeout(() => {
          this.notificationStore.removeNotification();
        }, 5000);
      }
    });
  }
}
