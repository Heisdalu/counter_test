import { render, screen, waitFor } from "@testing-library/react";

import Home from "../pages/index";
import userEvent from "@testing-library/user-event";

describe("<Home />", () => {
  const user = userEvent.setup();

  test("initial display value must be 1", () => {
    render(<Home />);
    const displayTag = screen.getByRole("paragraph");
    expect(displayTag.textContent).toBe("1");
  });

  test("increments when button is clicked", async () => {
    render(<Home />);
    const incrementButton = screen.getByRole("button", { name: /Increment/i });
    user.click(incrementButton);
    // get display value
    const displayTag = await screen.findByRole("paragraph");

    await waitFor(() => {
      // increments to 2 after clicking the button
      expect(displayTag.textContent).toBe("2");
    });
  });

  test("decrements when button is clicked", async () => {
    render(<Home />);
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    user.click(decrementButton);

    // get displayTag
    const displayTag = await screen.findByRole("paragraph");

    await waitFor(() => {
      // value decrements to 0 after clicking decrement button
      expect(displayTag.textContent).toBe("0");
    });
  });

  test("reset when reset button is clicked and value is 0", async () => {
    render(<Home />);
    // mocks the reset flow by incremeting the value to 2, then resetting to 1
    const resetButton = screen.getByRole("button", { name: /reset/i });
    const incrementButton = screen.getByRole("button", {
      name: /Increment/i,
    });

    //incrementing the value to 2
    user.click(incrementButton);
    const displayTag = await screen.findByRole("paragraph");
    await waitFor(() => {
      // value is 2
      expect(displayTag.textContent).toBe("2");
    });

    // reset the button
    user.click(resetButton);

    await waitFor(() => {
      // value resets to 1 after clicking decrement button
      expect(displayTag.textContent).toBe("1");
    });
  });
});
