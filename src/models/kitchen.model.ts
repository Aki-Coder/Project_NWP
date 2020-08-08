import { Meals } from './meals-details.model';

export class Kitchen{
  constructor(
    public id: string,
    public kicthen:string,
    public meals:Meals[],

  ){}
}
