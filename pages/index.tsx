import { Inter } from "next/font/google";
import DisplayCounter from "../components/DisplayCounter/DisplayCounter";
import { useState } from "react";
import Increment from "../components/Button/Increment";
import Decrement from "../components/Button/Decrement";
import Reset from "../components/Button/Reset";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(1);

  const incrementCount = (): void => {
    setCount((prev) => prev + 1);
  };
  const decrementCount = (): void => {
    setCount((prev) => prev - 1);
  };
  const resetCount = (value: number): void => {
    setCount(value);
  };

  return (
    <div className="border-1 flex justify-center">
      <div className="p-[3rem]">
        <DisplayCounter value={count} />
        <div className="flex flex-col justify-center space-y-[2rem]">
          <Increment incrementFunc={incrementCount} />
          <Decrement decrementFunc={decrementCount} />
          <Reset resetFunc={resetCount} />
        </div>
      </div>
    </div>
  );
}
