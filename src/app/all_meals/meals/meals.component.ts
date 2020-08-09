import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meals } from 'src/models/meals-details.model';
import { Router } from '@angular/router';
import { MealsService } from './meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit,OnDestroy {
  meals: Meals[];
  mealsSub: Subscription;

  constructor(private router: Router, private service: MealsService) {}

  ngOnInit(): void {
    this.mealsSub = this.service.getMeals().subscribe((meals:Meals[]) => {
      this.meals = meals;
      console.log(this.meals);
    });
  }

  onLoadMeal(id:number) {
    this.router.navigate(['/showone', id]);
    console.log("Prikazi obrok sa id-jem "+id);
  }

  ngOnDestroy(){
    this.mealsSub.unsubscribe();
  }
}
