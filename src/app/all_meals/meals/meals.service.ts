import { Injectable } from '@angular/core';
import { Meals } from 'src/models/meals-details.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MealsService{

  private servicePath = "/meals";

  constructor(private http: HttpClient){}

  getMeals(){
    return this.http.get(environment.firebase.databaseURL+ this.servicePath + ".json");
  }

}
