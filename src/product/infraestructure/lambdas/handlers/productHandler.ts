import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { ProductService } from "../../../application/productService";
import container from "../../../../inversify.config";

const productService = container.get<ProductService>("ProductService");

export const getAllProducts = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const products = await productService.getAllProducts();
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};


export const getProductWithHighestPrice = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const product = await productService.getProductWithHighestPrice();
  return {
    statusCode: 200,
    body: JSON.stringify(product),
  };
};