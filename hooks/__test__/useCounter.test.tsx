import { renderHook, act } from "@testing-library/react";
import useCounter from "../useCounter";

describe("useCounter", () => {
  test("should render an inital of 1", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(1);
  });
  test("should increase the  value when incrementFunc is called", async () => {
    const { result } = renderHook(() => useCounter());

    // increment value
    act(() => {
      result.current.incrementFunc();
    });
    expect(result.current.count).toBe(2);
  });
  test("should decrease the  value when decrementFunc is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      //decrement count
      result.current.decrementFunc();
    });

    expect(result.current.count).toStrictEqual(0);
  });
  test("should reset the  value to 1", () => {
    // first add and test.. then reset the value,.. the test reset again
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.incrementFunc();
    });

    expect(result.current.count).toBe(2);

    act(() => {
      result.current.resetFunc();
    });

    // reset back to 1
    expect(result.current.count).toBe(1);
  });
});
