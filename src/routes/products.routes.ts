import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ProductsRepository from '../repositories/ProductsRepository';
import CreateProductService from '../services/CreateProductService';
import UpdateProductService from '../services/UpdateProductService';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
  const productsRepository = getCustomRepository(ProductsRepository);
  const products = await productsRepository.find();

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

productsRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { name, avatar, price, quantity, description } = request.body;

    const updateProduct = new UpdateProductService();
    const product = await updateProduct.execute({
      product_id: id,
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

productsRouter.delete('/:id', (request, response) => {
  const { id } = request.params;
  const productsRepository = getCustomRepository(ProductsRepository);

  productsRepository.delete({ id });
  return response.json(id);
});

export default productsRouter;
