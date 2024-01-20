import { render, screen } from "@testing-library/react";
import DisplayCounter from "../DisplayCounter";

describe("<DisplayCounter />", () => {
  const counterValue = 10;
  test("display the counter value", () => {
    render(<DisplayCounter value={counterValue} />);
    const valueTag = screen.getByRole("paragraph");
    expect(valueTag).toHaveTextContent(counterValue.toString());
  });
  test("header is present", () => {
    render(<DisplayCounter value={counterValue} />);
    // in the component
    expect(
      screen.getByRole("heading", { name: /Counter Machine Coding/ })
    ).toBeInTheDocument();
  });
});
