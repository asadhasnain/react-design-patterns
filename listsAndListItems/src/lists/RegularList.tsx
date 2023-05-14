import React from "react";
import { Item } from "../Item";

export interface RegularListProps<T extends Item> {
    items: T[],
    component: React.FC<{item: T}>;
}

export const RegularList = <T extends Item,>( {items, component: ItemComponent}: RegularListProps<T>) => {
  return (
    <>
    {items.map((item) => <ItemComponent key={item.id} item={item} />)}
    </>
  );
};
