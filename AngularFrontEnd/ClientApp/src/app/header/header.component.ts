import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { AccountService } from '../shared/services/accounts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  status: boolean;
  subscription: Subscription;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.subscription = this.accountService.authNavStatus$.subscribe(status => this.status = status);
  }

  ngOnDestroy(): void {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
  }

  logout() {
    this.accountService.logout();
 }
}
