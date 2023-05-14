import { Product } from "./Product";

export const SmallProductListItem: React.FC<{item: Product}> = ({item}) => {
  const {name, price} = item;
  return <p>Name: {name}. Price: {price}</p>;
};
