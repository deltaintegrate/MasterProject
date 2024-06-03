"use strict";
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
exports.getTotalSalesByProduct = exports.getAllSales = void 0;
const inversify_config_1 = __importDefault(require("../../../../inversify.config"));
const saleService = inversify_config_1.default.get("SaleService");
const getAllSales = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    const sales = yield saleService.getAllSales();
    return {
        statusCode: 200,
        body: JSON.stringify(sales),
    };
});
exports.getAllSales = getAllSales;
const getTotalSalesByProduct = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const totalSales = yield saleService.getTotalSalesByProduct();
    return {
        statusCode: 200,
        body: JSON.stringify(totalSales),
    };
});
exports.getTotalSalesByProduct = getTotalSalesByProduct;
