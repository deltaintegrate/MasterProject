"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleDto = void 0;
class SaleDto {
    constructor(productId, date, quantity, price) {
        this.productId = productId;
        this.date = date;
        this.quantity = quantity;
        this.price = price;
    }
    static fromDomain(sale) {
        return new SaleDto(sale.product_id, sale.date, sale.quantity, sale.price);
    }
}
exports.SaleDto = SaleDto;
