import type { V1GetProductResponse, V1Product, V1ProductAttribute, V1ProductAttributeValue, V1ProductCategoryWithChildren, V1ProductSkuStock } from "goshop-api-client/api";
export * from "../components/ProductCard/types"

export type TODO = any;

export interface BrandItem {
  bigPic: string;
  factoryStatus: number;
  firstLetter: string;
  id: number;
  logo: string;
  name: string;
  showStatus: number;
  sort: number;
}

export interface HomeContent {
  advertiseList: BannerAdItem[];
  brandList: BrandItem[];
  newProductList: ProductItem[];
  hotProductList: ProductItem[];
}

// export interface HotProductItem {
//   albumPics: string
//   brandName: string
//   deleteStatus: number
//   description: string
//   detailTitle: string
//   giftGrowth: number
//   giftPoint: number
//   id: number
//   keywords: string
//   lowStock: number
//   name: string
//   newStatus: number
//   note: string
//   originalPrice: number
//   pic: string
//   previewStatus: number
//   price: number
//   productAttributeCategoryId: number
//   productCategoryId: number
//   productCategoryName: string
//   productSn: string
//   promotionPerLimit: number
//   promotionType: number
//   publishStatus: number
//   recommandStatus: number
//   sale: number
//   serviceIds: string
//   sort: number
//   stock: number
//   subTitle: string
//   unit: string
//   usePointLimit: number
//   verifyStatus: number
//   weight: number
// }

export interface BannerAdItem {
  id: number;
  name: string;
  type: number;
  pic: string;
  status: number;
  clickCount: number;
  orderCount: number;
  url: string;
  note: string;
  sort: number;
}

export interface ProductQuery {
  productCategoryId?: number;
  pageNum?: number;
  page?: number;
  pageSize: number;
  sort: number;
  keyword?: string;
  categoryList?: number[];
  tagIdList?: number[];
  repository?: number;
}

export interface CategoryItem extends V1ProductCategoryWithChildren {
  href: string;
}

export interface ProductListResponse<T> {
  list: T;
  pageNum?: number;
  pageSize?: number;
  total: number;
  totalPage?: number;
}

export type SfImage = {
  url: string
}

export interface ProductDetailResponse extends V1GetProductResponse {

}

export interface ProductItem extends V1Product {

}

export interface ProductDetail extends ProductItem {
  detailHtml: string;
  detailMobileHtml: string;
}

export interface CommentItem {
  id: number;
  productId: number;
  memberNickName: string;
  productName: string;
  star: number;
  createTime: string;
  content: string;
}
export interface CouponItem {}
export interface BrandInfo {
  name: string;
}

export interface ProductAttributeItem extends V1ProductAttribute {

}

export interface ProductAttributeValueItem extends V1ProductAttributeValue {
  
}

export interface SkuStockItem extends V1ProductSkuStock {

}

export interface SkuKeyValue {
  key: string;
  value: string;
}

export type SkuKeyValueItem = SkuKeyValue[];

export interface SkuObject {
  uuid: string;
  specs: SkuKeyValueItem;
}

export type CartList = CartItem[];

export interface CartItem {
  createDate: string;
  deleteStatus: number;
  id: number;
  memberId: number;
  memberNickname: string;
  price: number;
  productAttr: string;
  productAttrs: SkuKeyValue[];
  productBrand: string;
  productCategoryId: number;
  productId: number;
  productName: string;
  productPic: string;
  productSkuCode: string;
  productSkuId: number;
  productSn: string;
  productSubTitle: string;
  quantity: number;
}

export interface AddCartItem {
  price: number;
  productAttr: string;
  productBrand: string;
  productCategoryId: number;
  productId: number;
  productName: string;
  productPic: string;
  productSkuCode: string;
  productSkuId: number;
  productSn: string;
  productSubTitle: string;
  quantity: number;
}

export interface CartUpdateParams {
  id: number;
  quantity: number;
}

export interface CartRemoveParams {
  id: number;
}

export interface PromotionItem {
  id: number;
  productId: number;
  productSkuId: number;
  memberId: number;
  quantity: number;
  price: number;
  productPic: string;
  productName: string;
  productSubTitle: string;
  productSkuCode: string;
  memberNickname: string;
  createDate: string;
  deleteStatus: number;
  productCategoryId: number;
  productBrand: string;
  productSn: string;
  productAttr: string;
  promotionMessage: string;
  reduceAmount: number;
  realStock: number;
  integration: number;
  growth: number;
}

export interface ShippingAddress {
  id: number;
  memberId: number;
  name: string;
  phoneNumber: string;
  defaultStatus: number;
  postCode: string;
  province: string;
  city: string;
  region: string;
  detailAddress: string;
}

export interface ConsumeSetting {
  id: number;
  deductionPerAmount: number;
  maxPercentPerOrder: number;
  useUnit: number;
  couponStatus: number;
}

export interface CartOrderAmount {
  totalAmount: number;
  freightAmount: number;
  promotionAmount: number;
  payAmount: number;
}

export interface CartOrder {
  cartPromotionItemList: PromotionItem[]; // 优惠物品
  memberReceiveAddressList: ShippingAddress[]; // 送货地址
  integrationConsumeSetting: ConsumeSetting; // 积分抵扣
  memberIntegration: number; // 可用积分
  calcAmount: CartOrderAmount;
}

export interface RegionInfo {
  name: string;
  value: string;
}

export interface AddressForm {
  id: number;
  name: string;
  phoneNumber: string;
  defaultStatus: number;
  postCode: string;
  province: string;
  city: string;
  region: string;
  detailAddress: string;
}

export interface NewOrderData {
  payType: number;
  couponId: number;
  cartIds: number[];
  memberReceiveAddressId: number;
  useIntegration: number;
}

export interface NewOrderResponse {
  orderItemList: OrderItem[];
  order: OrderInfo;
}

export interface OrderInfo {
  id: number;
  memberId: number;
  orderSn: string;
  createTime: string;
  memberUsername: string;
  totalAmount: number;
  payAmount: number;
  freightAmount: number;
  promotionAmount: number;
  integrationAmount: number;
  couponAmount: number;
  discountAmount: number;
  payType: number;
  sourceType: number;
  status: number;
  orderType: number;
  autoConfirmDay: number;
  integration: number;
  growth: number;
  promotionInfo: string;
  receiverName: string;
  receiverPhone: string;
  receiverPostCode: string;
  receiverProvince: string;
  receiverCity: string;
  receiverRegion: string;
  receiverDetailAddress: string;
  confirmStatus: number;
  deleteStatus: number;
}

export interface OrderDetail extends OrderInfo {
  orderItemList: OrderItem[];
  deliveryCompany: string;
  deliverySn: string;
  deliveryTime: string;
}

export interface PayOrderParams {
  orderId: number;
  payType: number;
}

export interface OrderListQuery {
  status: number;
  pageNum: number;
  pageSize: number;
}

export interface OrderListResponse {
  list: OrderDetail[];
  pageNum: number;
  pageSize: number;
  total: number;
  totalPage: number;
}

export interface OrderItem {
  id: number;
  orderId: number;
  orderSn: string;
  productId: number;
  productPic: string;
  productName: string;
  productBrand: string;
  productSn: string;
  productPrice: number;
  productQuantity: number;
  productSkuId: number;
  productSkuCode: string;
  productCategoryId: number;
  promotionName: string;
  promotionAmount: number;
  couponAmount: number;
  integrationAmount: number;
  realAmount: number;
  giftIntegration: number;
  giftGrowth: number;
  productAttr: string;
}

export interface OrderUserActionParams {
  orderId: number;
}

export interface OrderReturnParams {
  orderId: number;
  productId: number;
  productSkuId: number;
  orderSn: string;
  reason: string;
  productCount: string;
  description: string;
  returnPhone: string;
  productAttr: string;
}

export interface OrderReturnQuery {
  status?: number;
  pageNum: number;
  pageSize: number;
}

export interface OrderReturnListResponse {
  list: OrderReturnParams[];
  pageNum: number;
  pageSize: number;
  total: number;
  totalPage: number;
}
