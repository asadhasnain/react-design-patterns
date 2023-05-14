import { render } from "@testing-library/react";
import App from "./App";

test("renders all lists", () => {
  const { getAllByText } = render(<App />);
  const peopleList = getAllByText(/Mr. Y/i);
  const productList = getAllByText(/Basketball/i);
  peopleList.forEach(people => {
    expect(people).toBeInTheDocument();
  });
  productList.forEach(product => {
    expect(product).toBeInTheDocument();
  });
 });
