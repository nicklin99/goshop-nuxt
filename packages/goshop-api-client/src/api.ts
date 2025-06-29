/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ProtobufAny {
  "@type"?: string;
  [key: string]: any;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/** 添加商品请求 */
export interface V1AddItemRequest {
  userId?: string;
  productId?: string;
  /** @format int32 */
  quantity?: number;
  productSkuId?: string;
}

/** 添加商品响应 */
export interface V1AddItemResponse {
  item?: V1CartItem;
}

/** 购物车消息 */
export interface V1Cart {
  userId?: string;
  items?: V1CartItem[];
}

/** 购物车项消息 */
export interface V1CartItem {
  productId?: string;
  productName?: string;
  /** @format int32 */
  quantity?: number;
  /** @format float */
  price?: number;
  productPic?: string;
  memberId?: string;
  productSubTitle?: string;
  productSkuCode?: string;
  memberNickname?: string;
  createDate?: string;
  modifyDate?: string;
  deleteStatus?: string;
  /** @format int64 */
  productCategoryId?: string;
  productBrand?: string;
  productSn?: string;
  productAttr?: string;
  productSkuId?: string;
  /** @format int64 */
  id?: string;
}

export interface V1ChangeItemQuantityRequest {
  userId?: string;
  productId?: string;
  productSkuId?: string;
  /** @format int32 */
  quantity?: number;
}

export interface V1ChangeItemQuantityResponse {
  success?: boolean;
  message?: string;
}

/** 定义创建产品分类响应消息 */
export interface V1CreateProductCategoryResponse {
  category?: V1ProductCategory;
}

/** 创建商品响应 */
export interface V1CreateProductResponse {
  product?: V1Product;
}

/** 定义删除产品分类响应消息 */
export interface V1DeleteProductCategoryResponse {
  success?: boolean;
}

/** 删除商品响应 */
export interface V1DeleteProductResponse {
  success?: boolean;
}

export interface V1EmptyCartRequest {
  userId?: string;
}

export interface V1EmptyCartResponse {
  success?: boolean;
  message?: string;
}

/** 获取所有商品响应 */
export interface V1GetAllProductsResponse {
  products?: V1Product[];
  /** @format int64 */
  total?: string;
}

export interface V1GetProductCategoryPathResponse {
  categories?: V1ProductCategory[];
}

export interface V1GetProductCategoryTreeResponse {
  categories?: V1ProductCategoryWithChildren[];
}

/** 获取商品响应 */
export interface V1GetProductResponse {
  product?: V1Product;
  attributes?: V1ProductAttribute[];
  attributeValues?: V1ProductAttributeValue[];
  skus?: V1ProductSkuStock[];
  brand?: V1ProductBrand;
}

export interface V1GetProductSkuResponse {
  sku?: V1ProductSkuStock;
}

export interface V1ListProductCategoryResponse {
  categories?: V1ProductCategory[];
  /** @format int64 */
  total?: string;
}

export interface V1OrderItem {
  productId?: string;
  productSkuId?: string;
  /** @format int32 */
  productQuantity?: number;
  /** @format float */
  productPrice?: number;
  /** @format float */
  promotionAmount?: number;
  /** @format float */
  couponAmount?: number;
  /** @format float */
  integrationAmount?: number;
  /** @format float */
  realAmount?: number;
}

export interface V1OrderResult {
  orderId?: string;
  shippingTrackingId?: string;
  shippingCost?: string;
  shippingAddress?: string;
  items?: V1OrderItem[];
}

export interface V1PlaceOrderRequest {
  userId?: string;
  userCurrency?: string;
  /** @format int64 */
  addressId?: string;
  cartIds?: string[];
  paymentMethod?: string;
  userName?: string;
  /**
   * 优惠券ID
   * @format int64
   */
  couponId?: string;
  /**
   * 使用积分
   * @format int64
   */
  usePoints?: string;
}

export interface V1PlaceOrderResponse {
  order?: V1OrderResult;
}

/** 商品消息定义 */
export interface V1Product {
  /**
   * 商品ID
   * @format int64
   */
  id?: string;
  /**
   * 品牌ID
   * @format int64
   */
  brandId?: string;
  /**
   * 商品分类ID
   * @format int64
   */
  productCategoryId?: string;
  /**
   * 运费模板ID
   * @format int64
   */
  feightTemplateId?: string;
  /**
   * 商品属性分类ID
   * @format int64
   */
  productAttributeCategoryId?: string;
  /** 商品名称 */
  name?: string;
  /** 商品图片 */
  pic?: string;
  /** 商品编号 */
  productSn?: string;
  /**
   * 删除状态
   * @format int32
   */
  deleteStatus?: number;
  /**
   * 发布状态
   * @format int32
   */
  publishStatus?: number;
  /**
   * 新品状态
   * @format int32
   */
  newStatus?: number;
  /**
   * 推荐状态
   * @format int32
   */
  recommandStatus?: number;
  /**
   * 审核状态
   * @format int32
   */
  verifyStatus?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 销量
   * @format int32
   */
  sale?: number;
  /**
   * 价格
   * @format double
   */
  price?: number;
  /**
   * 促销价格
   * @format double
   */
  promotionPrice?: number;
  /**
   * 赠送成长值
   * @format int32
   */
  giftGrowth?: number;
  /**
   * 赠送积分
   * @format int32
   */
  giftPoint?: number;
  /**
   * 使用积分限制
   * @format int32
   */
  usePointLimit?: number;
  /** 副标题 */
  subTitle?: string;
  /** 商品描述 */
  description?: string;
  /**
   * 原价
   * @format double
   */
  originalPrice?: number;
  /**
   * 库存
   * @format int32
   */
  stock?: number;
  /**
   * 低库存预警值
   * @format int32
   */
  lowStock?: number;
  /** 单位 */
  unit?: string;
  /**
   * 重量
   * @format double
   */
  weight?: number;
  /**
   * 预览状态
   * @format int32
   */
  previewStatus?: number;
  /** 服务ID */
  serviceIds?: string;
  /** 关键词 */
  keywords?: string;
  /** 备注 */
  note?: string;
  /** 画册图片 */
  albumPics?: string;
  /** 详情标题 */
  detailTitle?: string;
  /** 详情描述 */
  detailDesc?: string;
  /** 详情HTML */
  detailHtml?: string;
  /** 移动端详情HTML */
  detailMobileHtml?: string;
  /** 促销开始时间 */
  promotionStartTime?: string;
  /** 促销结束时间 */
  promotionEndTime?: string;
  /**
   * 促销限购数量
   * @format int32
   */
  promotionPerLimit?: number;
  /**
   * 促销类型
   * @format int32
   */
  promotionType?: number;
  /** 品牌名称 */
  brandName?: string;
  /** 商品分类名称 */
  productCategoryName?: string;
  /**
   * 商品仓库ID
   * @format int64
   */
  productRepositoryId?: string;
}

/** ProductAttribute 模型对应的 proto message */
export interface V1ProductAttribute {
  /**
   * 属性ID
   * @format int64
   */
  id?: string;
  /**
   * 属性分类ID
   * @format int64
   */
  attributeCategoryId?: string;
  /** 属性名称 */
  name?: string;
  /**
   * 属性选择类型：0->唯一；1->单选；2->多选
   * @format int32
   */
  selectType?: number;
  /**
   * 属性录入方式：0->手工录入；1->从列表中选取
   * @format int32
   */
  inputType?: number;
  /** 可选值列表，以逗号隔开 */
  inputList?: string;
  /**
   * 排序字段：最高的可以单独上传图片
   * @format int32
   */
  sort?: number;
  /**
   * 分类筛选样式：0->普通；1->颜色
   * @format int32
   */
  filterType?: number;
  /**
   * 检索类型：0->不需要进行检索；1->关键字检索；2->范围检索
   * @format int32
   */
  searchType?: number;
  /**
   * 相同属性产品是否关联；0->不关联；1->关联
   * @format int32
   */
  relatedStatus?: number;
  /**
   * 是否支持手动新增；0->不支持；1->支持
   * @format int32
   */
  handAddStatus?: number;
  /**
   * 属性类型；0->规格；1->参数
   * @format int32
   */
  type?: number;
}

/** ProductAttributeValue 模型对应的 proto message */
export interface V1ProductAttributeValue {
  /**
   * 主键ID
   * @format int64
   */
  id?: string;
  /**
   * 产品ID
   * @format int64
   */
  productId?: string;
  /**
   * 属性ID
   * @format int64
   */
  productAttributeId?: string;
  /** 属性值 */
  value?: string;
}

/** PmsBrand 对应 pms_brand 表的 proto3 message */
export interface V1ProductBrand {
  /** @format int64 */
  id?: string;
  name?: string;
  firstLetter?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  factoryStatus?: number;
  /** @format int32 */
  showStatus?: number;
  /** @format int32 */
  productCount?: number;
  /** @format int32 */
  productCommentCount?: number;
  logo?: string;
  bigPic?: string;
  brandStory?: string;
}

/** 产品分类消息定义 */
export interface V1ProductCategory {
  /**
   * 分类ID
   * @format int64
   */
  id?: string;
  /**
   * 上级分类的编号：0表示一级分类
   * @format int64
   */
  parentId?: string;
  /** 分类名称 */
  name?: string;
  /**
   * 分类级别：0->1级；1->2级
   * @format int32
   */
  level?: number;
  /**
   * 产品数量
   * @format int32
   */
  productCount?: number;
  /** 产品单位 */
  productUnit?: string;
  /**
   * 是否显示在导航栏：0->不显示；1->显示
   * @format int32
   */
  navStatus?: number;
  /**
   * 显示状态：0->不显示；1->显示
   * @format int32
   */
  showStatus?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 图标URL */
  icon?: string;
  /** 关键词 */
  keywords?: string;
  /** 描述 */
  description?: string;
}

export interface V1ProductCategoryWithChildren {
  /**
   * 分类ID
   * @format int64
   */
  id?: string;
  /**
   * 上级分类的编号：0表示一级分类
   * @format int64
   */
  parentId?: string;
  /** 分类名称 */
  name?: string;
  /**
   * 分类级别：0->1级；1->2级
   * @format int32
   */
  level?: number;
  /**
   * 产品数量
   * @format int32
   */
  productCount?: number;
  /** 产品单位 */
  productUnit?: string;
  /**
   * 是否显示在导航栏：0->不显示；1->显示
   * @format int32
   */
  navStatus?: number;
  /**
   * 显示状态：0->不显示；1->显示
   * @format int32
   */
  showStatus?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 图标URL */
  icon?: string;
  /** 关键词 */
  keywords?: string;
  /** 描述 */
  description?: string;
  childIds?: string[];
}

/** PmsSkuStock 对应 pms_sku_stock 表的 proto3 message */
export interface V1ProductSkuStock {
  /** @format int64 */
  id?: string;
  /** @format int64 */
  productId?: string;
  skuCode?: string;
  /** @format double */
  price?: number;
  /** @format int32 */
  stock?: number;
  /** @format int32 */
  lowStock?: number;
  pic?: string;
  /** @format int32 */
  sale?: number;
  /** @format double */
  promotionPrice?: number;
  /** @format int32 */
  lockStock?: number;
  spData?: string;
}

/** 移除商品请求 */
export interface V1RemoveItemRequest {
  userId?: string;
  cartIds?: string[];
}

/** 移除商品响应 */
export interface V1RemoveItemResponse {
  success?: boolean;
  message?: string;
}

/** 定义更新产品分类响应消息 */
export interface V1UpdateProductCategoryResponse {
  category?: V1ProductCategory;
}

/** 更新商品响应 */
export interface V1UpdateProductResponse {
  product?: V1Product;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "http://127.0.0.1:8888",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title goshop API文档
 * @version 1.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @baseUrl http://127.0.0.1:8888
 * @externalDocs https://auth.wfell.top
 * @contact Your Team <support@example.com> (https://example.com)
 *
 * Goshop
 */
export class Goshop<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * No description
     *
     * @tags CartService
     * @name CartServiceGetCart
     * @summary 获取购物车信息
     * @request GET:/v1/cart
     */
    cartServiceGetCart: (
      query?: {
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Cart, RpcStatus>({
        path: `/v1/cart`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CartService
     * @name CartServiceEmptyCart
     * @summary 清空购物车
     * @request POST:/v1/cart
     */
    cartServiceEmptyCart: (
      body: V1EmptyCartRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1EmptyCartResponse, RpcStatus>({
        path: `/v1/cart`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CartService
     * @name CartServiceAddItem
     * @summary 添加商品到购物车
     * @request POST:/v1/cart/add
     */
    cartServiceAddItem: (body: V1AddItemRequest, params: RequestParams = {}) =>
      this.request<V1AddItemResponse, RpcStatus>({
        path: `/v1/cart/add`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CartService
     * @name CartServiceChangeItemQuantity
     * @summary 更改购物车中商品的数量
     * @request POST:/v1/cart/change
     */
    cartServiceChangeItemQuantity: (
      body: V1ChangeItemQuantityRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1ChangeItemQuantityResponse, RpcStatus>({
        path: `/v1/cart/change`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CartService
     * @name CartServiceRemoveItem
     * @summary 从购物车移除商品
     * @request POST:/v1/cart/remove
     */
    cartServiceRemoveItem: (
      body: V1RemoveItemRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1RemoveItemResponse, RpcStatus>({
        path: `/v1/cart/remove`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CheckoutService
     * @name CheckoutServicePlaceOrder
     * @summary 从购物车选择商品下单
     * @request POST:/v1/checkout/order
     */
    checkoutServicePlaceOrder: (
      body: V1PlaceOrderRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1PlaceOrderResponse, RpcStatus>({
        path: `/v1/checkout/order`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductService
     * @name ProductServiceListProducts
     * @summary 获取所有商品
     * @request GET:/v1/products
     */
    productServiceListProducts: (
      query?: {
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        name?: string;
        brandName?: string;
        publishStatus?: string;
        /** @format int32 */
        categoryId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1GetAllProductsResponse, RpcStatus>({
        path: `/v1/products`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductService
     * @name ProductServiceCreateProduct
     * @summary 创建商品
     * @request POST:/v1/products
     */
    productServiceCreateProduct: (
      product: V1Product,
      params: RequestParams = {},
    ) =>
      this.request<V1CreateProductResponse, RpcStatus>({
        path: `/v1/products`,
        method: "POST",
        body: product,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductService
     * @name ProductServiceListProductCategory
     * @summary 分类
     * @request GET:/v1/products/category
     */
    productServiceListProductCategory: (
      query?: {
        /** @format int64 */
        page?: string;
        /** @format int64 */
        pageSize?: string;
        /** @format int64 */
        categoryId?: string;
        /** 递归 */
        recursive?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1ListProductCategoryResponse, RpcStatus>({
        path: `/v1/products/category`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductService
     * @name ProductServiceCreateProductCategory
     * @summary 创建分类
     * @request POST:/v1/products/category
     */
    productServiceCreateProductCategory: (
      category: V1ProductCategory,
      params: RequestParams = {},
    ) =>
      this.request<V1CreateProductCategoryResponse, RpcStatus>({
        path: `/v1/products/category`,
        method: "POST",
        body: category,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductService
     * @name ProductServiceGetProductCategoryPath
     * @summary 分类路径
     * @request GET:/v1/products/category/path
     */
    productServiceGetProductCategoryPath: (
      query?: {
        /** @format int64 */
        productCategoryId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1GetProductCategoryPathResponse, RpcStatus>({
        path: `/v1/products/category/path`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductService
     * @name ProductServiceGetProductCategoryTree
     * @summary tree
     * @request GET:/v1/products/category/tree
     */
    productServiceGetProductCategoryTree: (params: RequestParams = {}) =>
      this.request<V1GetProductCategoryTreeResponse, RpcStatus>({
        path: `/v1/products/category/tree`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductService
     * @name ProductServiceUpdateProductCategory
     * @summary 更新分类
     * @request POST:/v1/products/category/{category.id}
     */
    productServiceUpdateProductCategory: (
      categoryId: string,
      category: {
        /**
         * 上级分类的编号：0表示一级分类
         * @format int64
         */
        parentId?: string;
        /** 分类名称 */
        name?: string;
        /**
         * 分类级别：0->1级；1->2级
         * @format int32
         */
        level?: number;
        /**
         * 产品数量
         * @format int32
         */
        productCount?: number;
        /** 产品单位 */
        productUnit?: string;
        /**
         * 是否显示在导航栏：0->不显示；1->显示
         * @format int32
         */
        navStatus?: number;
        /**
         * 显示状态：0->不显示；1->显示
         * @format int32
         */
        showStatus?: number;
        /**
         * 排序
         * @format int32
         */
        sort?: number;
        /** 图标URL */
        icon?: string;
        /** 关键词 */
        keywords?: string;
        /** 描述 */
        description?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1UpdateProductCategoryResponse, RpcStatus>({
        path: `/v1/products/category/${categoryId}`,
        method: "POST",
        body: category,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductService
     * @name ProductServiceDeleteProductCategory
     * @summary 删除分类
     * @request DELETE:/v1/products/category/{id}
     */
    productServiceDeleteProductCategory: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<V1DeleteProductCategoryResponse, RpcStatus>({
        path: `/v1/products/category/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductService
     * @name ProductServiceGetProductSku
     * @summary 获取商品sku
     * @request GET:/v1/products/skus/{productSkuId}
     */
    productServiceGetProductSku: (
      productSkuId: string,
      params: RequestParams = {},
    ) =>
      this.request<V1GetProductSkuResponse, RpcStatus>({
        path: `/v1/products/skus/${productSkuId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductService
     * @name ProductServiceUpdateProduct
     * @summary 更新商品
     * @request PUT:/v1/products/{product.id}
     */
    productServiceUpdateProduct: (
      productId: string,
      product: {
        /**
         * 品牌ID
         * @format int64
         */
        brandId?: string;
        /**
         * 商品分类ID
         * @format int64
         */
        productCategoryId?: string;
        /**
         * 运费模板ID
         * @format int64
         */
        feightTemplateId?: string;
        /**
         * 商品属性分类ID
         * @format int64
         */
        productAttributeCategoryId?: string;
        /** 商品名称 */
        name?: string;
        /** 商品图片 */
        pic?: string;
        /** 商品编号 */
        productSn?: string;
        /**
         * 删除状态
         * @format int32
         */
        deleteStatus?: number;
        /**
         * 发布状态
         * @format int32
         */
        publishStatus?: number;
        /**
         * 新品状态
         * @format int32
         */
        newStatus?: number;
        /**
         * 推荐状态
         * @format int32
         */
        recommandStatus?: number;
        /**
         * 审核状态
         * @format int32
         */
        verifyStatus?: number;
        /**
         * 排序
         * @format int32
         */
        sort?: number;
        /**
         * 销量
         * @format int32
         */
        sale?: number;
        /**
         * 价格
         * @format double
         */
        price?: number;
        /**
         * 促销价格
         * @format double
         */
        promotionPrice?: number;
        /**
         * 赠送成长值
         * @format int32
         */
        giftGrowth?: number;
        /**
         * 赠送积分
         * @format int32
         */
        giftPoint?: number;
        /**
         * 使用积分限制
         * @format int32
         */
        usePointLimit?: number;
        /** 副标题 */
        subTitle?: string;
        /** 商品描述 */
        description?: string;
        /**
         * 原价
         * @format double
         */
        originalPrice?: number;
        /**
         * 库存
         * @format int32
         */
        stock?: number;
        /**
         * 低库存预警值
         * @format int32
         */
        lowStock?: number;
        /** 单位 */
        unit?: string;
        /**
         * 重量
         * @format double
         */
        weight?: number;
        /**
         * 预览状态
         * @format int32
         */
        previewStatus?: number;
        /** 服务ID */
        serviceIds?: string;
        /** 关键词 */
        keywords?: string;
        /** 备注 */
        note?: string;
        /** 画册图片 */
        albumPics?: string;
        /** 详情标题 */
        detailTitle?: string;
        /** 详情描述 */
        detailDesc?: string;
        /** 详情HTML */
        detailHtml?: string;
        /** 移动端详情HTML */
        detailMobileHtml?: string;
        /** 促销开始时间 */
        promotionStartTime?: string;
        /** 促销结束时间 */
        promotionEndTime?: string;
        /**
         * 促销限购数量
         * @format int32
         */
        promotionPerLimit?: number;
        /**
         * 促销类型
         * @format int32
         */
        promotionType?: number;
        /** 品牌名称 */
        brandName?: string;
        /** 商品分类名称 */
        productCategoryName?: string;
        /**
         * 商品仓库ID
         * @format int64
         */
        productRepositoryId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1UpdateProductResponse, RpcStatus>({
        path: `/v1/products/${productId}`,
        method: "PUT",
        body: product,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductService
     * @name ProductServiceGetProduct
     * @summary 获取单个商品
     * @request GET:/v1/products/{productId}
     */
    productServiceGetProduct: (productId: string, params: RequestParams = {}) =>
      this.request<V1GetProductResponse, RpcStatus>({
        path: `/v1/products/${productId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductService
     * @name ProductServiceDeleteProduct
     * @summary 删除商品
     * @request DELETE:/v1/products/{productId}
     */
    productServiceDeleteProduct: (
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<V1DeleteProductResponse, RpcStatus>({
        path: `/v1/products/${productId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
}
