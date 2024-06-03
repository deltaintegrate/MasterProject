"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDto = void 0;
class ProductDto {
    constructor(nombre, precio, created_by, updated_at, created_at, is_deleted) {
        this.nombre = nombre;
        this.precio = precio;
        this.created_by = created_by;
        this.updated_at = updated_at;
        this.created_at = created_at;
        this.is_deleted = is_deleted;
    }
    static fromDomain(product) {
        return new ProductDto(product.nombre, product.precio, product.created_by, product.updated_at, product.created_at, product.is_deleted);
    }
}
exports.ProductDto = ProductDto;
