import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/logging/logging.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy{

  isAutenticicated = false;
  userSub : Subscription;

  constructor(private authSerice : AuthService) { }

  ngOnInit() {
    this.userSub = this.authSerice.user.subscribe(user=>{
      this.isAutenticicated = !!user;
    });
    this.authSerice.autoLogin();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  onLogout(){
    this.authSerice.logout();
  }

}
