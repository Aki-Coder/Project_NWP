import { Category } from './category.model';
import { Kitchen } from './kitchen.model';
import { Order } from './order.model';

export class Meals{
  constructor(
    public id: string,
    public name: string,
    public details: string,
    public price: number,
    public category:Category,
    public kitchen: Kitchen,
    public order: Order[]
  ){}
}
