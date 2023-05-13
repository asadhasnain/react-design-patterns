import { render } from "@testing-library/react";
import { LeftHandComponent } from "./LeftHandComponent";

test("Left Hand component background-color: green", () => {
  const component = render(<LeftHandComponent name="test" />);
  const element = component.getByTestId("lhc-h1");
  expect(element).toBeInTheDocument();
  expect(element).toHaveStyle("background-color: green");
});

test("Left Hand component text: test", () => {
    const name = "test";
    const component = render(<LeftHandComponent name={name} />);
    const element = component.getByTestId("lhc-h1");
    expect(element).toHaveTextContent(name);
  });
