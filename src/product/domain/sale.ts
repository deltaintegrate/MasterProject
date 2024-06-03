export class Sale {
  constructor(
    public productId: number,
    public date: Date,
    public quantity: number,
    public price: number
  ) {}
}