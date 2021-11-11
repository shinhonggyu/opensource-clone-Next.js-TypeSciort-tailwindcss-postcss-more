import { ApiConfig } from './../../common/types/api';
import { normalizeProduct, getAllProductsQuery } from '@framework/utils';
import { ProductConnection } from '../schema';
import { Product } from '@common/types/product';

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });

  // normalize and return new data!
  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];

  return products;
};

export default getAllProducts;
