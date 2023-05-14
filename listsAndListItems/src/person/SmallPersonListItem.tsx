import { People } from "./People";

export const SmallPersonListItem: React.FC<{item: People}> = ({item: people}) => {
  const {name, age} = people;
  return <p>Name: {name}. Age: {age} years</p>;
};
