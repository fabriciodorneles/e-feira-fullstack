import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ProductsRepository from '../repositories/ProductsRepository';
import CreateProductService from '../services/CreateProductService';

const productsRouter = Router();

productsRouter.get('/', (request, response) => {
  const productsRepository = getCustomRepository(ProductsRepository);
  const products = productsRepository.find();

  return response.json(products);
});

productsRouter.post('/', async (request, response) => {
  try {
    const { name, avatar, price, quantity, description } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      avatar,
      price,
      quantity,
      description,
    });

    return response.json(product);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default productsRouter;
