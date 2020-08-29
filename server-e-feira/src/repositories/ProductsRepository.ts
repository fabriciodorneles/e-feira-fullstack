import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
  public async findById(id: string): Promise<Product | undefined> {
    const user = await this.findOne(id);
    return user;
  }
}

export default ProductsRepository;
