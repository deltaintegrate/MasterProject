import { inject, injectable } from "inversify";
import { ISaleRepository } from "../domain/repositories/ISaleRepository";
import { Sale } from "../domain/sale";


@injectable()
export class SaleService {
  constructor(
    @inject("ISaleRepository") private saleRepository: ISaleRepository
  ) {}

  async getAllSales(): Promise<Sale[]> {
    return await this.saleRepository.getAll();
  }

  async getTotalSalesByProduct(): Promise<{ productId: number, totalSales: number }[]> {
    return await this.saleRepository.getTotalSalesByProduct();
  }
}