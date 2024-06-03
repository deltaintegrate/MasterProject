import "reflect-metadata";
import { Container } from "inversify";
import { People, ProductService } from "./product/application/productService";
import container from "./inversify.config";
import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { getAllProducts, getProductWithHighestPrice } from "./product/infraestructure/lambdas/handlers/productHandler";
import { getTotalSalesByProduct } from "./product/infraestructure/lambdas/handlers/saleHandler";

export class main {
  static async execute(): Promise<void>{
    const productService = container.get<ProductService>("ProductService");
    const event: APIGatewayProxyEvent = {
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
      requestContext: {} as any,
      resource: '',
    };
    const context = {};
    try {
      //Respuesta 1.1
      console.info("Respuesta 1.1")
      const productosMayores = await productService.getProductOnPrice(10000);
      console.log(productosMayores);
      //Respuesta 1.2
      console.info("Respuesta 1.2")
      const peopleList: People[] = [
        ["leonardo", 26],
        ["Juan", 30],
        ["pedro", 20],
        ["Sofia", 35]
      ];
      const orderList = await productService.getFallingNumbers(peopleList);
      console.log(orderList);
      //Respuesta 2
      console.info("Respuesta 2")
      console.log(await productService.getQuery());
      console.info("Respuesta 3")
      const resultado1 = await getAllProducts(event);
      const resultado2 = await getTotalSalesByProduct(event);
      const resultado3 = await getProductWithHighestPrice(event);
      console.log('Obtener todos los productos.', resultado1);
      console.log('Obtener la cantidad total de ventas por producto.', resultado2);
      console.log('Obtener el producto con el precio más alto.', resultado3);

    } catch (error)  {
      console.error("Error:", error);
    }
  }

}

main.execute();