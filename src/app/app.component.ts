import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/logging/logging.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'projnwp';

  isAutenticicated = false;
  userSub : Subscription;

  constructor(private authSerice : AuthService){

  }

  ngOnInit(){
    this.userSub = this.authSerice.user.subscribe(user=>{
      this.isAutenticicated = !!user;
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  onLogout(){
    this.authSerice.logout();
  }
}
