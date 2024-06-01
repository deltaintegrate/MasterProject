import { Container } from "inversify";
import { ProductService } from "./lambdas/application/productService";
import { ProductRepository } from "./lambdas/infraestructure/productRepository";

const container = new Container();

container.bind<ProductService>("ProductService").to(ProductService);
container.bind<ProductRepository>("ProductRepository").to(ProductRepository);

export default container;