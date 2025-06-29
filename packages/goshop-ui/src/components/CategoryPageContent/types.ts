import type { ProductCardProps } from '../../types';

export type CategoryPageContentProps = {
  page: number;
  title: string;
  total: number;
  pageSize?: number;
  list: ProductCardProps[];
  categoryIds?: number[];
  currentCategory?: number;
  base?: string;
  status: 'idle' | 'pending' | 'success' | 'error';
  pending: boolean;
};
