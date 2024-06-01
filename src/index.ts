import "reflect-metadata";
import { Container } from "inversify";
import { People, ProductService } from "./lambdas/application/productService";
import container from "./inversify.config";

export class main {
  static async execute(): Promise<void>{
    const productService = container.get<ProductService>("ProductService");
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
    } catch (error)  {
      console.error("Error:", error);
    }
  }

}

main.execute();