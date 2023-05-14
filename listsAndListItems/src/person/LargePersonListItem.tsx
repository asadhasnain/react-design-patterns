import { People } from "./People";

export const LargePersonListItem: React.FC<{item: People}> = ({item}) => {
  const {name, age, hairColor, hobbies} = item;
  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <ul>
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
    </>
  );
};
