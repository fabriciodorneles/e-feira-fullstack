import { getCustomRepository } from 'typeorm';
import Product from '../entities/Product';
import ProductsRepository from '../repositories/ProductsRepository';

interface IRequest {
  name: string;
  avatar?: string;
  description?: string;
  price: number;
  quantity: number;
}

class CreateProductService {
  public async execute({
    name,
    avatar,
    price,
    quantity,
    description,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = productsRepository.create({
      name,
      avatar,
      description,
      price,
      quantity,
    });

    await productsRepository.save(product);

    return product;
  }
}
export default CreateProductService;
