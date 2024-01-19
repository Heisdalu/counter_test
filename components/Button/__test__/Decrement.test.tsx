import { screen, render } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import Decrement from "../Decrement";

describe("<Decrement />", () => {
  test("calls decrement function when button is clicked", async () => {
    const user = userEvent.setup();
    const decrementFuncMock = jest.fn();
    render(<Decrement decrementFunc={decrementFuncMock} />);

    const button = screen.getByRole("button", { name: /decrement/i });
    await user.click(button);
    expect(decrementFuncMock).toHaveBeenCalledTimes(1);
  });
});
