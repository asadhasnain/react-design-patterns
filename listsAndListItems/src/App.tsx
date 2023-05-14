import { NumberedList } from "./lists/NumberedList";
import { RegularList } from "./lists/RegularList";
import { LargePersonListItem } from "./person/LargePersonListItem";
import { People } from "./person/People";
import { SmallPersonListItem } from "./person/SmallPersonListItem";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { Product } from "./products/Product";
import { SmallProductListItem } from "./products/SmallProductListItem";

const people: People[] = [{
  id: "0001",
  name: "Mr. X",
  age: 39,
  hairColor: "gray",
  hobbies: ["reading", "movies"]
},
{
  id: "0002",
  name: "Mr. Y",
  age: 28,
  hairColor: "black",
  hobbies: ["reading", "mobile", "football"]
}];

const products: Product[] = [{
    id: "0001",
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  }, 
  {
    id: "0002",
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    id: "0003",
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  }];

function App() {
  return (
    <>
      <RegularList items={people} component={SmallPersonListItem} key="small-person-list"/>
      <NumberedList items={people} component={LargePersonListItem} key="large-person-list"/>
      <RegularList items={products} component={SmallProductListItem} key="small-product-list"/>
      <NumberedList items={products} component={LargeProductListItem} key="large-product-list"/>
    </>
  );
}

export default App;
