import { Container } from "inversify";
import { ProductService } from "./product/application/productService";
import { ProductRepository } from "./product/infraestructure/PostgresProductRepository";
import { MysqlProductRepository } from "./product/infraestructure/MysqlProductRepository";
import { SaleService } from "./product/application/saleService";
import { MySQLSaleRepository } from "./product/infraestructure/MySqlSaleRepository";
import { IProductRepository } from "./product/domain/repositories/IProductRepository";
import { ISaleRepository } from "./product/domain/repositories/ISaleRepository";
import { AwsService } from "./product/infraestructure/aws/secret";

const container = new Container();

container.bind<ProductService>("ProductService").to(ProductService);
container.bind<SaleService>("SaleService").to(SaleService);
container.bind<ProductRepository>("ProductRepository").to(ProductRepository);
container.bind<IProductRepository>("IProductRepository").to(MysqlProductRepository);
container.bind<ISaleRepository>("ISaleRepository").to(MySQLSaleRepository);
container.bind<AwsService>("AwsService").to(AwsService);

export default container;