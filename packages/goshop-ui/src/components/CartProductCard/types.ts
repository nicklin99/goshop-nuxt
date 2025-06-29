import type { SkuKeyValue } from '../../types';

export interface Attribute {
  label: string;
  name: string;
  value: string;
}

export type CartProductCardProps = {
  attributes?: string;
  imageUrl?: string | null;
  imageAlt?: string | null;
  maxValue?: number;
  minValue: number;
  name: string;
  price?: number;
  specialPrice: number;
  value?: number;
  id: string;
  productSkuId?: string | null;
  productId: string;
};
