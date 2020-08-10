import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meals } from 'src/models/meals-details.model';
import { MealsService } from 'src/app/all_meals/meals/meals.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit,OnDestroy {

  meals:Meals[];
  mealsSub:Subscription;
  mealSub: Subscription;
  mealId:number;
  meal:Meals;

  constructor(private service:MealsService,private route:ActivatedRoute) {
    this.mealSub = this.route.params.subscribe((data: any) => {
      if (data.id !== "-1")  {
        this.mealId = +data.id;
        console.log(data);
      }else
        this.mealId = null;
    });
   }

  ngOnInit(): void {
    this.mealsSub = this.service.getMeals().subscribe((mealsA:Meals[]) => {
      this.meals = mealsA;
      this.meals.forEach(element => {
        if(element.id == this.mealId){
          this.meal = element;
        }
      });
    })
  }

  saveOrder(){
    //od podataka iz forme napravi porudzbinu, save u bazu
  }

  ngOnDestroy(){
    this.mealSub.unsubscribe();
    this.mealsSub.unsubscribe();
  }

}
