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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://127.0.0.1:8888";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
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
