import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Reset from "../Reset";

describe("<Reset/>", () => {
  test("calls reset function when reset button is called", async () => {
    const user = userEvent.setup();
    const resetFuncMock = jest.fn();
    render(<Reset resetFunc={resetFuncMock} />);
    const resetButton = screen.getByRole("button", { name: /reset/i });
    await user.click(resetButton);
    console.log(resetFuncMock.mock);

    expect(resetFuncMock).toHaveBeenCalledTimes(1);
    // reset value to 1
    expect(resetFuncMock).toHaveBeenCalledWith(1);
  });
});
