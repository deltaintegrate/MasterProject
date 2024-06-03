import { Client } from "pg";
import * as dotenv from "dotenv"
import { ProductDto } from "../../core/dto/productDto";
import { injectable } from "inversify";
import { totalSellQuery } from "../../core/query/totalSellQuery";

dotenv.config();

@injectable()
export class ProductRepository {
  private client: Client;

  constructor() {
    this.client = new Client({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
    });

    this.client.connect();
  }

  async getAllProducts(): Promise<ProductDto[]> {
    const res = await this.client.query('SELECT * FROM producto');
    return res.rows.map(row => new ProductDto(
       row.nombre,
       row.precio,
       row.created_by,
       row.updated_at,
       row.created_at,
       row.is_deleted,
    )) 
  }

  async getQuery() {
    return (await this.client.query(totalSellQuery)).rows;
  }
}