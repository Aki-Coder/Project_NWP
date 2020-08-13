import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:"root"
})
export class OrderService{

  constructor(private http: HttpClient){}

  saveOrder(order:Order){
    return this.http.post<Order>("https://auth-b38cc.firebaseio.com/order"+ ".json",order);
  }



}
