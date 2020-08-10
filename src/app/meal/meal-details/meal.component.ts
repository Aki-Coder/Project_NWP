import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Meals } from 'src/models/meals-details.model';
import { MealsService } from 'src/app/all_meals/meals/meals.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit, OnDestroy {
  mealId: number;
  mealSub: Subscription;
  mealsSub: Subscription;
  meals: Meals[];

  meal :Meals;

  constructor(private activeRoute: ActivatedRoute,private route:Router, private service: MealsService) {
     this.mealSub = this.activeRoute.params.subscribe((data: any) => {
      if (data.id !== "-1")  {
        this.mealId = +data.id;
        console.log(data);
      }else
        this.mealId = null;
    });
  }

  ngOnInit(): void {
    this.mealsSub = this.service.getMeals().subscribe((mealsArray:Meals[])=>{
      this.meals = mealsArray;
      this.meals.forEach(element => {
        if(element.id == this.mealId){
          this.meal = element;
        }
      });
    })
  }

  onBuyMeal(id:number){
    this.route.navigate(['/basket',id]);
  }

  ngOnDestroy(){
    this.mealSub.unsubscribe();
    this.mealsSub.unsubscribe();
  }

  }


