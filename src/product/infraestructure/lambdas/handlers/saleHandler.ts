import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import container from "../../../../inversify.config";
import { SaleService } from "../../../application/saleService";

const saleService = container.get<SaleService>("SaleService");

export const getAllSales: APIGatewayProxyHandler = async (event, context) => {
  const sales = await saleService.getAllSales();
  return {
    statusCode: 200,
    body: JSON.stringify(sales),
  };
};

export const getTotalSalesByProduct = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>  {
  const totalSales = await saleService.getTotalSalesByProduct();
  return {
    statusCode: 200,
    body: JSON.stringify(totalSales),
  };
};