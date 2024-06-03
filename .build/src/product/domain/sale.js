"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
class Sale {
    constructor(productId, date, quantity, price) {
        this.productId = productId;
        this.date = date;
        this.quantity = quantity;
        this.price = price;
    }
}
exports.Sale = Sale;
