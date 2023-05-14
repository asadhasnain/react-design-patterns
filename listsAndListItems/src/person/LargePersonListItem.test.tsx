import { render } from "@testing-library/react";
import { LargePersonListItem } from "./LargePersonListItem";
import { People } from "./People";

describe("LargePersonListItem", () => {
	it("should render name, age, hair color and hobbies", () => {
		const people: People = {
            id: "0001",
			name: "John Doe",
			age: 30,
			hairColor: "brown",
			hobbies: ["reading", "swimming"],
		};

		const { getByText } = render(<LargePersonListItem item={people} />);

		expect(getByText(/John Doe/i)).toBeInTheDocument();
		expect(getByText(/Age: 30 years/i)).toBeInTheDocument();
		expect(getByText(/Hair Color: brown/i)).toBeInTheDocument();
		expect(getByText(/reading/i)).toBeInTheDocument();
		expect(getByText(/swimming/i)).toBeInTheDocument();
	});
});