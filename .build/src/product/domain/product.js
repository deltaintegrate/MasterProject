"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(nombre, precio, created_by, updated_at, created_at, is_deleted) {
        this.nombre = nombre;
        this.precio = precio;
        this.created_by = created_by;
        this.updated_at = updated_at;
        this.created_at = created_at;
        this.is_deleted = is_deleted;
    }
}
exports.Product = Product;
