import * as dotenv from "dotenv"
import { injectable } from "inversify";
import mysql, { Connection, Pool } from 'mysql2/promise';
import { ProductDto } from "../../core/dto/productDto";
import { IProductRepository } from "../domain/repositories/IProductRepository";
import container from "../../inversify.config";
import { AwsService } from "./aws/secret";


dotenv.config();

@injectable()
export class MysqlProductRepository implements IProductRepository {
  private pool: Pool;
  public envFunction: () => void;

  constructor(){
    this.envFunction = async () => {

    },
    this.pool = 
    mysql.createPool({
      host: process.env.DB_MYSQL_HOST,
      user: process.env.DB_MYSQL_USER,
      password: '',
      database: process.env.DB_MYSQL_DATABASE,
    });
  }


  public async getAll(): Promise<ProductDto[]> {
    const connection: Connection = await this.pool.getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM producto');
    return rows as ProductDto[];
  }

  public async insert(product: ProductDto): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async getProductWithHighestPrice(): Promise<any> {
    const connection: Connection = await this.pool.getConnection();
    const [rows, fields] = await connection.query(`
    SELECT p.id, p.name, p.category, MAX(s.price) as max_price
    FROM producto p
    JOIN sale s ON p.id = s.product_id
    GROUP BY p.id, p.name, p.category
    ORDER BY max_price DESC
    LIMIT 1
  `);
  this.close();
  return rows;
  }

  public async close(): Promise<void> {
    await this.pool.end();
  }
}