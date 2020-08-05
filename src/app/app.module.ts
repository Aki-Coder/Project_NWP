import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { RoutingComponent } from './routing/routing/routing.component';
import { LoggingComponent } from './auth/logging/logging.component';
import { MealsComponent } from './all_meals/meals/meals.component';
import { MealComponent } from './meal/meal/meal.component';
import { BasketComponent } from './shopping_basket/basket/basket.component';
import { SignoutComponent } from './auth2/signout/signout.component';
import { AppRouting } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './spinner/loading-spinner/loading-spinner.component';
import { FooterComponent } from './footer/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoutingComponent,
    LoggingComponent,
    MealsComponent,
    MealComponent,
    BasketComponent,
    SignoutComponent,
    LoadingSpinnerComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
