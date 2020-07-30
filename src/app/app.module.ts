import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { RoutingComponent } from './routing/routing/routing.component';
import { LoggingComponent } from './auth/logging/logging.component';
import { MealsComponent } from './all_meals/meals/meals.component';
import { MealComponent } from './meal/meal/meal.component';
import { BasketComponent } from './shopping_basket/basket/basket.component';
import { SignoutComponent } from './auth2/signout/signout.component';
import { AppRouting } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoutingComponent,
    LoggingComponent,
    MealsComponent,
    MealComponent,
    BasketComponent,
    SignoutComponent
  ],
  imports: [
    BrowserModule,
    AppRouting

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
