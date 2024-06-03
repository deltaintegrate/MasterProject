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
exports.getProductWithHighestPrice = exports.getAllProducts = void 0;
const inversify_config_1 = __importDefault(require("../../../../inversify.config"));
const productService = inversify_config_1.default.get("ProductService");
const getAllProducts = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productService.getAllProducts();
    return {
        statusCode: 200,
        body: JSON.stringify(products),
    };
});
exports.getAllProducts = getAllProducts;
const getProductWithHighestPrice = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productService.getProductWithHighestPrice();
    return {
        statusCode: 200,
        body: JSON.stringify(product),
    };
});
exports.getProductWithHighestPrice = getProductWithHighestPrice;
