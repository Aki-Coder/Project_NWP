import { Meals } from './meals-details.model';

export class Category{
  constructor(
    public id:string,
    public category:string,
    public melas:Meals[],
  ){}
}
