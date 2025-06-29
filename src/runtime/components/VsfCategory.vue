<template>
  <VsfCategoryPageContent :list="products.data.value?.products ?? []" :total="Number(products.data.value?.total ?? 0)"
    :status="products.status.value" :pending="products.pending.value" :page-size="query.pageSize" :page="query.page"
    :title="categoryTitle ?? (props.defaultTitle || $t('allProducts'))">
    <template #sidebar>
      <VsfCategoryTreeMenu v-if="filterCategorys" :value="catId" :treeMap="catalogsMap" :childIds="childIds"
        :expanded="expanded" />
    </template>
    <template #pagination>
      <t-config-provider>
        <t-affix :offset-bottom="0">
          <t-pagination :current="query.page" :page-size="query.pageSize"
            :total="Number(products.data.value?.total ?? 0)" @change="handlePageChange" :pageSizeOptions="[15, 30]" />
        </t-affix>
      </t-config-provider>
    </template>
  </VsfCategoryPageContent>
</template>

<script setup lang="ts">
import type { V1GetProductCategoryTreeResponse } from "goshop-api-client/api";
import {
  VsfCategoryPageContent,
  VsfCategoryTreeMenu,
  useStore,
} from "goshop-ui";
import { createError, useLazyAsyncData, useRoute, useState } from "nuxt/app";
import { computed, watch } from "vue";

type Props = {
  defaultTitle?: string
  catId?: string
}
const props = defineProps<Props>()
// 只显示这些分类
// const setupCategorys = new Set([137, 121, 151, 158]);
const { storefront, paths } = useStore()
const resolveProductHref = (productID: number | string) => {
  return `${paths.product}/${productID}`
}
const defaultQuery = {
  page: 1,
  pageSize: 15,
  categoryId: undefined as number | undefined,
};
const query = useState(() => {
  return {
    ...defaultQuery,
    categoryId: props.catId ? Number(props.catId) : undefined,
  };
});
const products = useLazyAsyncData(async () => {
  try {
    const ret = await storefront.v1.productServiceListProducts({
      ...query.value
    });
    const data = ret.data.products?.map(v => {
      return {
        ...v,
        href: resolveProductHref(v.id!)
      }
    });
    return {
      products: data,
      total: ret.data.total,
    }
  } catch (error) {
    console.error(error)
    throw createError({
      statusCode: 500,
      statusMessage: (error as Error).message
    })
  }
})
// 分类树
const catalogs = useLazyAsyncData<V1GetProductCategoryTreeResponse>("catalogs", async () => {
  return (await storefront.v1.productServiceGetProductCategoryTree()).data;
})
const childIds = computed(() => {
  return catalogs.data.value?.categories?.filter(v => v.level === 0).map(v => v.id!) ?? []
})
const catalogsMap = computed(() => {
  const ret = catalogs.data.value?.categories?.map((v) => {
    return {
      ...v,
      href: `${paths.category}?cat_id=${v.id}`
    }
  }) ?? []
  return new Map(ret.map(v => [v.id!, v]));
})

const filterCategorys = computed(() => {
  return catalogs.data.value?.categories?.filter(v => v.level == 0)
});
const route = useRoute();
const breadcrumbs = computed(() => {
  const paths = []
  let current = catalogsMap.value.get(props.catId?.toString() ?? "")
  while (current) {
    paths.unshift(current)
    current = catalogsMap.value.get(current.parentId?.toString() ?? "")
  }
  return paths
});
const expanded = computed(() => {
  return breadcrumbs.value.map((v) => v.id!);
});

const categoryTitle = computed(() => {
  const cat = catalogsMap.value.get(props.catId?.toString() ?? "");
  return cat?.name;
});
// const currentCategory = computed(() => {
//   return catalogsMap.value?.get(props.catId?.toString() ?? "");
// });
const handlePageChange = (pageInfo: PageInfo) => {
  query.value.page = pageInfo.current;
  query.value.pageSize = pageInfo.pageSize;
};

watch(
  [() => props.catId, () => route.query.page],
  () => {
    query.value.page = route.query.page ? Number(route.query.page) : 1;
    query.value.categoryId = props.catId ? Number(props.catId) : undefined;
  },
  {
    immediate: true,
  }
);
watch(
  [query],
  async () => {
    const ret = await storefront.v1.productServiceListProducts({
      ...query.value,
    });
    const data = ret.data.products?.map(v => {
      return {
        ...v,
        href: resolveProductHref(v.id!)
      }
    }) ?? [];
    products.data.value!.products = data
    products.data.value!.total = ret.data.total
  },
  {
    deep: true,
  }
);
</script>