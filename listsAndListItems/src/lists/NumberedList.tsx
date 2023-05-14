import React from "react";
import { Item } from "../Item";

export interface NumberedListProps<T extends Item> {
    items: T[],
    component: React.FC<{item: T}>;
}

export const NumberedList = <T extends Item,>( {items, component: ItemComponent}: NumberedListProps<T>) => {
  return (
    <>
    {items.map((item, i) => 
        <div key={`num_${i}`}>
            <h3 key={`num_${item.id}`}>{i + 1}</h3>
            <ItemComponent key={item.id} item={item} />
        </div>
    )}
    </>
  );
};
