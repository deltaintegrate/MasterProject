export class Product {
  constructor(
    public nombre: string, 
    public precio: string,
    public created_by: string,
    public updated_at: Date,
    public created_at: Date,
    public is_deleted: boolean,
  ) {}
}