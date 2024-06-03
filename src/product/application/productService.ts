import { inject, injectable } from "inversify";
import { ProductRepository } from "../infraestructure/PostgresProductRepository";
import { Product } from "../domain/product";
import { MysqlProductRepository } from "../infraestructure/MysqlProductRepository";
import { IProductRepository } from "../domain/repositories/IProductRepository";

export type People = [string, number];

@injectable()
export class ProductService{
  constructor(
    @inject("ProductRepository")
    private productRepository: ProductRepository,
    @inject("IProductRepository")
    private productRepositoryMysql: IProductRepository,
  ) {}

  public async getProductOnPrice(price: number): Promise<Product[]> {
    const products: Product[] = await this.productRepository.getAllProducts() as Product[]
    return products.filter(product => parseInt(product.precio.replace(".",""), 10) > price);
  }

  public async getFallingNumbers(peopleList: People[]): Promise<People[]>{
    return peopleList.sort((a, b) => b[1] - a[1])
  }

  public async getAllProducts() {
    return await this.productRepositoryMysql.getAll();
  }

  async getProductWithHighestPrice(): Promise<Product> {
    return await this.productRepositoryMysql.getProductWithHighestPrice();
  }


  async getQuery(): Promise<any>{
    return await this.productRepository.getQuery();
  } 

}