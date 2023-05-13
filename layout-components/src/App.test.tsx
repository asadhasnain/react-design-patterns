import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders application and check left text", () => {
  render(<App />);
  const linkElement = screen.getByText("Left");
  expect(linkElement).toBeInTheDocument();
});


test("renders application -> SplitScreen contains LeftHandComponent", () => {
  const app = render(<App />);
  const splitScreen = app.getByTestId("ss-container");
  const left = app.getByTestId("lhc-h1");
  expect(splitScreen).toContainElement(left);
});

test("renders application -> SplitScreen contains RightHandComponent", () => {
  const app = render(<App />);
  const splitScreen = app.getByTestId("ss-container");
  const right = app.getByTestId("rhc-p");
  expect(splitScreen).toContainElement(right);
});