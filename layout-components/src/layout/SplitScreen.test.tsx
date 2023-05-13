import { render } from "@testing-library/react";
import { SplitScreen } from "./SplitScreen";
import { LeftHandComponent } from "./LeftHandComponent";
import { RightHandComponent } from "./RightHandComponent";

test("SplitScreen rendered", () => {
    const name = "test";
    const message = "message";
    const component = render(<SplitScreen>
                            <LeftHandComponent name={name}/>
                            <RightHandComponent message={message}/>
                            </SplitScreen>);

    const lhc = component.getByTestId("lhc-h1");
    expect(lhc).toBeInTheDocument();
    expect(lhc).toHaveStyle("background-color: green");
    expect(lhc).toHaveTextContent(name);

    const rhc = component.getByTestId("rhc-p");
    expect(rhc).toBeInTheDocument();
    expect(rhc).toHaveStyle("background-color: red");
    expect(rhc).toHaveTextContent(message);
});

