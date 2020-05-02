import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AccountService } from './shared/services/accounts.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private accountsService: AccountService,
    private router: Router) {}

  canActivate() {

    if (!this.accountsService.currentUserLogin()) {
       this.router.navigate(['/login']);
       return false;
    }

    return true;
  }
}
