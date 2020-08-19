import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Meals } from 'src/models/meals-details.model';
import { MealsService } from 'src/app/all_meals/meals/meals.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from './order.service';
import { Order } from 'src/models/order.model';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit, OnDestroy {
  defaultSelected = 'SRB';

  meals: Meals[];
  mealsSub: Subscription;
  mealSub: Subscription;
  mealId: number;
  meal: Meals;
  orders: Order[];
  orderSub: Subscription;

  title: string;



  constructor(
    private service: MealsService,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {
    this.mealSub = this.route.params.subscribe((data: any) => {
      if (data.id !== '-1') {
        this.mealId = +data.id;
        console.log(data);
      } else this.mealId = null;
    });
  }

  ngOnInit(): void {
    this.mealsSub = this.service.getMeals().subscribe((mealsA: Meals[]) => {
      this.meals = mealsA;
      this.meals.forEach((element) => {
        if (element.id == this.mealId) {
          this.meal = element;
          console.log(element);
        }
      });
    });
  }

  save(form: NgForm) {
    var orderO = new Order(
      form.value.fname,
      form.value.lname,
      form.value.selection,
      form.value.houseadd,
      form.value.city,
      form.value.phone,
      form.value.email
    );

    this.orders = [];

    this.orderSub = this.orderService.saveOrder(orderO).subscribe((orderO) => {
      console.log(form.value);
      this.orders.push(orderO);
    });
    form.reset();
  }

  show() {
    console.log('Bravo');
    alert('Successfully ordered');

  }

  ngOnDestroy() {
    this.mealSub.unsubscribe();
    this.mealsSub.unsubscribe();
    //this.orderSub.unsubscribe();
  }
}
