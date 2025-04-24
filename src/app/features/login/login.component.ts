import { Component } from '@angular/core';
import { LoggedInService } from '../../core/services/logged-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    public loginService: LoggedInService,
    private router: Router
  ) {}

  public login() {
    this.loginService.setIsLoggedIn();
    this.router.navigate(['/bookstore']);
  }
}
