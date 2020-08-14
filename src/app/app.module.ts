import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';

import { LoggingComponent } from './auth/logging/logging.component';
import { MealsComponent } from './all_meals/meals/meals.component';

import { BasketComponent } from './shopping_basket/basket/basket.component';
import { AppRouting } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingSpinnerComponent } from './spinner/loading-spinner/loading-spinner.component';
import { FooterComponent } from './footer/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { AuthGard } from './auth/logging/logging.guard';
import { AuthService } from './auth/logging/logging.service';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { MealComponent } from './meal/meal-details/meal.component';
import { AuthInterceptorService } from './auth/logging/logging-interseptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoggingComponent,
    MealsComponent,
    MealComponent,
    BasketComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    PageNotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

  ],
  providers: [
    AuthGard,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
