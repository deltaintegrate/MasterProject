import { Product } from "../product";

export interface IProductRepository {
  getAll(): Promise<Product[]>;
  insert(product: Product): Promise<void>;
  getProductWithHighestPrice(): Promise<Product>;
}