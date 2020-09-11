import { getCustomRepository } from 'typeorm';
import Product from '../entities/Product';
import ProductsRepository from '../repositories/ProductsRepository';

interface IRequest {
  product_id: string;
  name: string;
  avatar?: string;
  description?: string;
  price: number;
  quantity: number;
}

class UpdateProductService {
  public async execute({
    product_id,
    name,
    avatar,
    price,
    quantity,
    description,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);
    const product = await productsRepository.findById(product_id);
    if (!product) {
      throw new Error('Product not Found');
    }
    if (name) product.name = name;
    if (avatar) product.avatar = avatar;
    if (price) product.price = price;
    if (quantity) product.quantity = quantity;
    if (description) product.description = description;

    await productsRepository.save(product);

    return product;
  }
}
export default UpdateProductService;
