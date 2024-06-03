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
exports.main = void 0;
require("reflect-metadata");
const inversify_config_1 = __importDefault(require("./inversify.config"));
const productHandler_1 = require("./product/infraestructure/lambdas/handlers/productHandler");
const saleHandler_1 = require("./product/infraestructure/lambdas/handlers/saleHandler");
class main {
    static execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const productService = inversify_config_1.default.get("ProductService");
            const event = {
                body: null,
                headers: {},
                multiValueHeaders: {},
                httpMethod: 'GET',
                isBase64Encoded: false,
                path: '/',
                pathParameters: null,
                queryStringParameters: null,
                multiValueQueryStringParameters: null,
                stageVariables: null,
                requestContext: {},
                resource: '',
            };
            const context = {};
            try {
                //Respuesta 1.1
                console.info("Respuesta 1.1");
                const productosMayores = yield productService.getProductOnPrice(10000);
                console.log(productosMayores);
                //Respuesta 1.2
                console.info("Respuesta 1.2");
                const peopleList = [
                    ["leonardo", 26],
                    ["Juan", 30],
                    ["pedro", 20],
                    ["Sofia", 35]
                ];
                const orderList = yield productService.getFallingNumbers(peopleList);
                console.log(orderList);
                //Respuesta 2
                console.info("Respuesta 2");
                console.log(yield productService.getQuery());
                console.info("Respuesta 3");
                const resultado1 = yield (0, productHandler_1.getAllProducts)(event);
                const resultado2 = yield (0, saleHandler_1.getTotalSalesByProduct)(event);
                const resultado3 = yield (0, productHandler_1.getProductWithHighestPrice)(event);
                console.log('Respuesta 3', { resultado1, resultado2, resultado3 });
            }
            catch (error) {
                console.error("Error:", error);
            }
        });
    }
}
exports.main = main;
main.execute();
