import { inject, injectable } from "inversify";
import { ProductRepository } from "../infraestructure/productRepository";
import { Product } from "../domain/product";

export type People = [string, number];

@injectable()
export class ProductService{
  constructor(
    @inject("ProductRepository")
    private productRepository: ProductRepository
  ) {}

  async getProductOnPrice(price: number): Promise<Product[]> {
    const products: Product[] = await this.productRepository.getAllProducts() as Product[]
    return products.filter(product => parseInt(product.precio.replace(".",""), 10) > price);
  }

  async getFallingNumbers(peopleList: People[]): Promise<People[]>{
    return peopleList.sort((a, b) => b[1] - a[1])
  }

  async getQuery(): Promise<any>{
    return await this.productRepository.getQuery();
  } 

}