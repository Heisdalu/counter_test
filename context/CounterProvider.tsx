import { ReactNode, useState } from "react";
import { CounterContext } from "./context";

const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(1);

  const incrementFunc = (): void => {
    setCount((prev) => prev + 1);
  };
  const decrementFunc = (): void => {
    setCount((prev) => prev - 1);
  };
  const resetFunc = (value: number): void => {
    setCount(value);
  };

  const store = {
    count,
    incrementFunc,
    decrementFunc,
    resetFunc,
  };

  return (
    <CounterContext.Provider value={store}>{children}</CounterContext.Provider>
  );
};
export default CounterProvider;
