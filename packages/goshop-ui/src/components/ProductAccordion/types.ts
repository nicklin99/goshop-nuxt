import type { CommentItem, ProductDetailResponse } from '../../types';

export type ProductAccordionPropsType = {
  product: ProductDetailResponse;
  commentList: CommentItem[];
};
