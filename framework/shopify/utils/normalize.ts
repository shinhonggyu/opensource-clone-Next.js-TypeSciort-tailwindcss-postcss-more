import { Product as ShopifyProduct, ImageEdge, MoneyV2 } from '../schema';
import { Product, ProductPrice } from '@common/types/product';

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });

const normalizeProductPrice = ({
  amount,
  currencyCode,
}: MoneyV2): ProductPrice => ({
  // string to number
  value: +amount,
  currencyCode,
});

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
}
