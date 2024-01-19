import { render, screen } from "@testing-library/react";

import Home from "../pages/index";
import userEvent from "@testing-library/user-event";

describe("<Home />", () => {
  test("initial display value must be 1", () => {
    const displayTag = screen.getByRole('paragraph', {})
  });

  test("increments when button is clicked", async () => {
    const user = userEvent.setup();
  });
});
