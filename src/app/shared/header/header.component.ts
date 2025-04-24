import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoggedInService } from '../../core/services/logged-in.service';
import { NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public isLoggedIn = false;
  public loginService = inject(LoggedInService);
  public router = inject(Router);

  constructor() {
    this.loginService.isLoggedIn$
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        this.isLoggedIn = value;
      });
  }

  public handleLogout() {
    this.loginService.setIsLoggedOut();
    this.router.navigate(['/login']);
  }
}
