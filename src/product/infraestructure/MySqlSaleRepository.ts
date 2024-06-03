import { injectable } from "inversify";
import mysql, { Connection, Pool } from 'mysql2/promise';
import { ISaleRepository } from "../domain/repositories/ISaleRepository";
import { SaleDto } from "../../core/dto/saleDto";

@injectable()
export class MySQLSaleRepository implements ISaleRepository {
  private pool: Pool;

  constructor(){
    this.pool = mysql.createPool({
      host: process.env.DB_MYSQL_HOST,
      user: process.env.DB_MYSQL_USER,
      password: '',
      database: process.env.DB_MYSQL_DATABASE,
    });
  }

  async getAll(): Promise<SaleDto[]> {
    const connection: Connection = await this.pool.getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM sale');
    this.close();
    return rows as SaleDto[];
  }

  async insert(sale: SaleDto): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getTotalSalesByProduct(): Promise<{ productId: number, totalSales: number }[]> {
    const [rows] = await this.pool.query(`
      SELECT product_id, SUM(quantity) as totalSales
      FROM sale
      GROUP BY product_id
    `);
    return rows as { productId: number, totalSales: number }[];
  }

  public async close(): Promise<void> {
    await this.pool.end();
  }
}