import type { CategoryItem } from '../../types';

export type CategoryTreeMenuItemProps = {
  id: string;
  name: string;
  href: string;
  showStatus?: number;
  childIds: string[];
  treeMap: Map<string, CategoryItem>;
  selected?: boolean;
  expanded: boolean // true 展开 false 折叠
  level: number;
};

export type CategoryTreeMenuProps = {
  childIds: string[];
  treeMap: Map<string, CategoryItem>;
  value?: string; // 当前激活的菜单
  expanded?: string[]; // 展开的菜单
};

export type CategoryMenuContext = {
  selected?: string;
  expanded: string[];
}