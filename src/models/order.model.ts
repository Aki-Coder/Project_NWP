import { Meals } from './meals-details.model';

export class Order{
  constructor(
    public id: string,
    public addres:string,
    public date:Date,
    public nameOrder:string,
    public status:string,
    public price:number,
    public meals:Meals[]
  ){}
}
