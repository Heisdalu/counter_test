import { renderHook, waitFor } from "@testing-library/react";
import { useFetchedData } from "../useFetchedData";

global.fetch = jest.fn();

//
describe("useFetchData", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return the initial values for `data`, error and loading", async () => {
    const { result } = renderHook(() => useFetchedData());
    const { data, error, loading } = result.current;

    await waitFor(() => expect(data).toBeNull());
    await waitFor(() => expect(error).toBeNull());
    await waitFor(() => expect(loading).toBeTruthy());
  });
});

describe("when data is fetched successfully", () => {
  let mockedData = [
    {
      id: 1,
      title: "mock title",
    },
  ];
  

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockReturnValue({
      //@ts-ignore
      json: jest.fn().mockResolvedValue(mockedData),
    });
  });

  test("it should return that data", async () => {
    const { result } = renderHook(() => useFetchedData());

    await waitFor(() => {
      expect(result.current).toStrictEqual({
        data: mockedData,
        loading: false,
        error: null,
      });
    });
  });
});

describe("loading", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("test loading", async () => {
    const { result } = renderHook(() => useFetchedData());

    expect(result.current.loading).toBeTruthy();

    await waitFor(() => {
      const { loading } = result.current;
      // prevent negatively postive.. it will be true here due tp async chnages
      expect(loading).toBe(true);
    });
    await waitFor(() => {
      // must return false..async operations are done
      const { loading } = result.current;
      expect(loading).toBe(false);
    });
  });
});

describe("when data fail the fetch", () => {
  const mockedError = new Error("mocked error");

  beforeEach(() => {
    jest.resetAllMocks();
    jest.spyOn(global, "fetch").mockRejectedValue(mockedError);
    // global.fetch.mockRejectedValue(mockedError);
  });

  test("should return an error message", async () => {
    const { result } = renderHook(() => useFetchedData());

    await waitFor(() => {
      expect(result.current).toStrictEqual({
        data: null,
        loading: false,
        error: mockedError.message,
      });
    });
  });
});
