export class Meals{
  constructor(
    public id: number,
    public name: string,
    public imagePath:string,
    public description: string,
    public price: number,
    public category:string,
    public kitchen: string,
    public restaurant:string,
  ){}
}
