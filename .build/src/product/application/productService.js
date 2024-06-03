"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const inversify_1 = require("inversify");
const PostgresProductRepository_1 = require("../infraestructure/PostgresProductRepository");
let ProductService = class ProductService {
    constructor(productRepository, productRepositoryMysql) {
        this.productRepository = productRepository;
        this.productRepositoryMysql = productRepositoryMysql;
    }
    getProductOnPrice(price) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productRepository.getAllProducts();
            return products.filter(product => parseInt(product.precio.replace(".", ""), 10) > price);
        });
    }
    getFallingNumbers(peopleList) {
        return __awaiter(this, void 0, void 0, function* () {
            return peopleList.sort((a, b) => b[1] - a[1]);
        });
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productRepositoryMysql.getAll();
        });
    }
    getProductWithHighestPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productRepositoryMysql.getProductWithHighestPrice();
        });
    }
    getQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productRepository.getQuery();
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)("ProductRepository")),
    __param(1, (0, inversify_1.inject)("IProductRepository")),
    __metadata("design:paramtypes", [PostgresProductRepository_1.ProductRepository, Object])
], ProductService);
