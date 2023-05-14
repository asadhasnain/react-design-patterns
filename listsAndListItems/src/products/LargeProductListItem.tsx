import { Product } from "./Product";

export const LargeProductListItem: React.FC<{item: Product}> = ({item}) => {
  const {name, description, price, rating} = item;
  return (
    <>
      <h3>{name}</h3>
      <p>Description: {description} years</p>
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
    </>
  );
};
