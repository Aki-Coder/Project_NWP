import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
})
export class MealComponent implements OnInit, OnDestroy {
  mealId: number;
  mealSub: Subscription;

  constructor(private activeRoute: ActivatedRoute) {
     this.mealSub = this.activeRoute.params.subscribe((data: any) => {
      if (data.id !== "null") {
        this.mealId = +data.id;
        console.log(data);
      }else
        this.mealId = null;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(){
  this.mealSub.unsubscribe();
  }

  }


