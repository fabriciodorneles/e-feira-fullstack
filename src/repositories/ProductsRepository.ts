import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
  public async findById(id: string): Promise<Product | undefined> {
    console.log(`dentro da findByid ${id}`);
    const product = await this.findOne(id);
    console.log(`dentro da findByid ${product}`);
    return product;
  }
}

export default ProductsRepository;
