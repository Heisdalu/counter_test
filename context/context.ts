import { createContext } from "react";

export const CounterContext = createContext({
  count: 1,
  incrementFunc: () => {},
  decrementFunc: () => {},
  resetFunc: (value: number) => {},
});
