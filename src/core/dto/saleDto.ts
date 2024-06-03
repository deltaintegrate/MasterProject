export class SaleDto {
  constructor(  
    public productId: number,
    public date: Date,
    public quantity: number,
    public price: number
  ) {}

  static fromDomain(sale: any): SaleDto {
    return new SaleDto(
       sale.product_id,
       sale.date,
       sale.quantity,
       sale.price
    ) 
  }


}