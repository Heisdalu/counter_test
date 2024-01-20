import { render, screen, waitFor } from "@testing-library/react";
import CounterProvider from "../CounterProvider";
import About from "@/pages/about";
import { userEvent } from "@testing-library/user-event";

describe("<CounterProvider/>", () => {
  test("should have an initial of 1", () => {
    render(<About />, { wrapper: CounterProvider });
    const displayTag = screen.getByRole("paragraph");
    expect(displayTag).toHaveTextContent("1");
  });

  test("should increment when incrment button is clicked", async () => {
    const user = userEvent.setup();
    render(<About />, { wrapper: CounterProvider });
    const incrementBtn = screen.getByRole("button", { name: /increment/i });

    // click incremental buttoon
    user.click(incrementBtn);

    await waitFor(() => {
      const displayTag = screen.getByRole("paragraph");
      expect(displayTag).toHaveTextContent("2");
    });
    screen.debug();
  });

  test("should decrement when decrement button is clicked", async () => {
    const user = userEvent.setup();
    render(<About />, { wrapper: CounterProvider });
    const decrementBtn = screen.getByRole("button", { name: /decrement/i });

    // click incremental button
    user.click(decrementBtn);

    await waitFor(() => {
      const displayTag = screen.getByRole("paragraph");
      expect(displayTag).toHaveTextContent("0");
    });
  });
});

test("should reset when reset button is clicked", async () => {
  const user = userEvent.setup();
  render(<About />, { wrapper: CounterProvider });
  const decrementBtn = screen.getByRole("button", { name: /decrement/i });

  // click incremental button
  user.click(decrementBtn);

  await waitFor(() => {
    const displayTag = screen.getByRole("paragraph");
    expect(displayTag).toHaveTextContent("0");
  });

  const resetBtn = screen.getByRole("button", { name: /reset/i });
  user.click(resetBtn);

  await waitFor(() => {
    const displayTag = screen.getByRole("paragraph");
    expect(displayTag).toHaveTextContent("1");
  });
});
