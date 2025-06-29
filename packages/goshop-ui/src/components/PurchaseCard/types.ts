import type {
  ProductAttributeItem,
  ProductAttributeValueItem,
  SkuStockItem,
  ProductDetailResponse,
} from '../../types';

export type PurchaseCardProps = {
  product: ProductDetailResponse;
  attrs?: ProductAttributeItem[];
  attrValues?: ProductAttributeValueItem[];
  skus?: SkuStockItem[];
};
