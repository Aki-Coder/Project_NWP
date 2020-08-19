import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/logging/logging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAutenticicated: boolean = false;
  private userSub: Subscription;

  constructor(private authSerice: AuthService, private route: Router) {}

  ngOnInit() {
    this.userSub = this.authSerice.user.subscribe((user) => {
      this.isAutenticicated = !!user;
    });
    this.authSerice.autoLogin();
  }

  onLogout() {
    this.authSerice.logout();
    this.route.navigate(['/auth']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
