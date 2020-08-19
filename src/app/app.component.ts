import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/logging/logging.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
