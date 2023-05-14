import { render } from "@testing-library/react";
import { People } from "./People";
import { SmallPersonListItem } from "./SmallPersonListItem";

describe("SmallPersonListItem", () => {
	it("should render name, age", () => {
		const people: People = {
            id: "0001",
			name: "John Doe",
			age: 30,
			hairColor: "brown",
			hobbies: ["reading", "swimming"],
		};

		const { getByText } = render(<SmallPersonListItem item={people} />);

		expect(getByText(/John Doe/i)).toBeInTheDocument();
		expect(getByText(/Age: 30 years/i)).toBeInTheDocument();
	});
});