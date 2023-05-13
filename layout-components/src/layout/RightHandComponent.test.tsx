import { render } from "@testing-library/react";
import { RightHandComponent } from "./RightHandComponent";

test("Right Hand component background-color: green", () => {
  const component = render(<RightHandComponent message="message" />);
  const element = component.getByTestId("rhc-p");
  expect(element).toBeInTheDocument();
  expect(element).toHaveStyle("background-color: red");
});

test("Right Hand component message: right", () => {
    const message = "right";
    const component = render(<RightHandComponent message={message} />);
    const element = component.getByTestId("rhc-p");
    expect(element).toHaveTextContent(message);
  });
