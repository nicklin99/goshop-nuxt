import type { V1Product } from "goshop-api-client/api";

export interface ProductCardProps extends V1Product {
  href: string;
  priority?: boolean;
  lazy?: boolean;
};
