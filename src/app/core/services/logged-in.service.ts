import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggedInService {
  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();
  private isLoggedInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  constructor() {
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }

  public setIsLoggedIn(): void {
    this.isLoggedInSubject.next(true);
  }

  public setIsLoggedOut(): void {
    this.isLoggedInSubject.next(false);
  }
}
