import { ref, toRef } from 'vue';
import { groupBy, uniqBy } from 'lodash-es';
import type { ProductAttributeItem, SkuKeyValue, SkuStockItem } from '../../types';

/**
 * composable for getting product attributes data
 * @param {SfProduct} product Product object
 * @param {TAttribute} attributesNames get specific product attributes
 */
export function useProductAttribute<TAttribute extends string>(
  skus: SkuStockItem[],
  attributesNames: ProductAttributeItem[] = [],
) {
  // { 容量: [{key: '容量', value: '16G'} {key: '容量', value: '32G'}] }
  const attributes = groupBy(
    uniqBy(
      (skus || []).flatMap((sku) => JSON.parse(sku.spData || 'null')),
      'value',
    ),
    'key',
  );

  const specs: string[] = [];

  const mapAttribute = (attributes: SkuKeyValue[] = []) => {
    const defaults = attributesNames.map((attribute) => ({ key: attribute.name, value: null }));

    const selected = Object.fromEntries([...defaults, ...attributes].map(({ key, value }) => [key, value]));
    // [bug] 规格存在，但是没有sku，删除掉这个规格
    for (const key in selected) {
      if (selected[key] == null) {
        delete selected[key];
      }
    }
    attributesNames.forEach((attribute) => {
      if (Object.prototype.hasOwnProperty.call(selected, attribute.name!)) {
        specs.push(attribute.name!);
      }
    });

    return selected;
  };

  const attributeKeysArray = JSON.parse(skus[0].spData!) as SkuKeyValue[];
  const attributeList: string[] = [];
  attributeKeysArray.forEach((kv) => {
    attributeList.push(kv.key);
  });

  const selectedAttrs = ref(mapAttribute(attributeKeysArray));
  const selectedSku = ref<SkuStockItem>();
  const getSku = () => {
    const kvs: SkuKeyValue[] = [];
    // fix [bug]
    attributeList.forEach((key) => {
      if (Object.hasOwnProperty.call(selectedAttrs.value, key)) {
        kvs.push({ key, value: selectedAttrs.value[key]! });
      }
    });
    const uuid = JSON.stringify(kvs);
    const item = skus.find((sku: SkuStockItem) => sku.spData === uuid);
    selectedSku.value = item;
    return item;
  };
  getSku();

  return {
    specs,
    getAttributeList: (attributeName: TAttribute) => attributes[attributeName] || [],
    getAttribute: (attributeName: TAttribute) => selectedAttrs.value[attributeName],
    setAttribute: (attributeName: TAttribute, attributeValue: string) => {
      selectedAttrs.value = {
        ...selectedAttrs.value,
        [attributeName]: attributeValue,
      };
    },
    selectedSku,
    getSku,
  };
}
