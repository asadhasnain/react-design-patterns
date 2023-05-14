import { render } from "@testing-library/react";
import { People } from "../person/People";
import { SmallPersonListItem } from "../person/SmallPersonListItem";
import { RegularList } from "./RegularList";

describe("RegularList", () => {
 it("renders a list of items", () => {
   const people: People[] = [
     {id: "0001", name: "Alice", age: 30, hairColor: "white", hobbies: ["basket ball"] },
     {id: "0002", name: "Bob", age: 40, hairColor: "white", hobbies: ["movies"]  },
   ];
   const { getByText } = render(<RegularList items={people} component={SmallPersonListItem} />);
   expect(getByText(/Alice/)).toBeInTheDocument();  // Flexible text matcher with Regular Expression This should work even if the text is broken up by multiple elements.
   expect(getByText(/Bob/)).toBeInTheDocument();
 });
});