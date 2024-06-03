import { Sale } from "../sale";

export interface ISaleRepository {
  getAll(): Promise<Sale[]>;
  insert(sale: Sale): Promise<void>;
  getTotalSalesByProduct(): Promise<{ productId: number, totalSales: number }[]>;
}