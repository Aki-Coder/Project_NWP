import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { MealsComponent } from './all_meals/meals/meals.component';

import { BasketComponent } from './shopping_basket/basket/basket.component';
import { LoggingComponent } from './auth/logging/logging.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { AuthGard } from './auth/logging/logging.guard';
import { MealComponent } from './meal/meal-details/meal.component';

const appRouters: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'showall', component: MealsComponent, canActivate: [AuthGard] },
  { path: 'showone/:id', component: MealComponent, canActivate: [AuthGard] },
  { path: 'basket/:id', component: BasketComponent, canActivate: [AuthGard] },
  { path: 'auth', component: LoggingComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule],
})
export class AppRouting {}
