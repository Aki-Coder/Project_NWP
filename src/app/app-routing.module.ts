import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { MealsComponent } from './all_meals/meals/meals.component';
import { MealComponent } from './meal/meal/meal.component';
import { BasketComponent } from './shopping_basket/basket/basket.component';
import { SignoutComponent } from './auth2/signout/signout.component';
import { LoggingComponent } from './auth/logging/logging.component';
import { AuthGuard } from './auth/logging/logging.guard';



const appRouters: Routes = [
  {path: '',
  redirectTo: 'home',
  pathMatch: 'full'},
  {path : 'home', component: HomeComponent},
  {path: 'showall',
  component:MealsComponent, canActivate: [AuthGuard]},
  {path: 'showone',
  component:MealComponent},
  {path: 'basket',
  component:BasketComponent},
  {path: 'signout',
  component:SignoutComponent},
  {path: 'auth',
  component: LoggingComponent}
]


@NgModule({
  imports:[
    RouterModule.forRoot(appRouters)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouting{

}
