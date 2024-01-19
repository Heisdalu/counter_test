import { render, screen } from "@testing-library/react";
import Increment from "../Increment";
import { userEvent } from "@testing-library/user-event";

describe("<Increment/>", () => {
  test("when user click the button, calls the increment function", async () => {
    const incrementFuncMock = jest.fn();
    const user = userEvent.setup();
    render(<Increment incrementFunc={incrementFuncMock} />);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(incrementFuncMock).toHaveBeenCalledTimes(1);
  });
});
