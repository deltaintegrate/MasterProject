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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLSaleRepository = void 0;
const inversify_1 = require("inversify");
const promise_1 = __importDefault(require("mysql2/promise"));
let MySQLSaleRepository = class MySQLSaleRepository {
    constructor() {
        this.pool = promise_1.default.createPool({
            host: process.env.DB_MYSQL_HOST,
            user: process.env.DB_MYSQL_USER,
            password: '',
            database: process.env.DB_MYSQL_DATABASE,
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.pool.getConnection();
            const [rows, fields] = yield connection.query('SELECT * FROM sale');
            this.close();
            return rows;
        });
    }
    insert(sale) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    getTotalSalesByProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.pool.query(`
      SELECT product_id, SUM(quantity) as totalSales
      FROM sale
      GROUP BY product_id
    `);
            return rows;
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pool.end();
        });
    }
};
exports.MySQLSaleRepository = MySQLSaleRepository;
exports.MySQLSaleRepository = MySQLSaleRepository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], MySQLSaleRepository);
