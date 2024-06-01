export class ProductDto {
  constructor(  
    public nombre: string,
    public precio: string,
    public created_by: string,
    public updated_at: Date,
    public created_at: Date,
    public is_deleted: boolean,
  ) {}

  static fromDomain(product: any): ProductDto {
    return new ProductDto(
       product.nombre,
       product.precio,
       product.created_by,
       product.updated_at,
       product.created_at,
       product.is_deleted,
    ) 
  }


}