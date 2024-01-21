import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(1);

  const incrementFunc = () => {
    setCount((prev) => prev + 1);
  };
  const decrementFunc = () => {
    setCount((prev) => prev - 1);
  };
  const resetFunc = () => {
    setCount(1);
  };

  return { count, incrementFunc, decrementFunc, resetFunc };
};
export default useCounter;
