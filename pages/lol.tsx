import DisplayCounter from "@/components/DisplayCounter/DisplayCounter";
import Increment from "@/components/Button/Increment";
import Decrement from "@/components/Button/Decrement";
import Reset from "@/components/Button/Reset";
import useCounter from "@/hooks/useCounter";

const lol = () => {
  const { count, decrementFunc, incrementFunc, resetFunc } = useCounter();

  return (
    <div>
      <div className="border-1 flex justify-center">
        <div className="p-[3rem]">
          <DisplayCounter value={count} />
          <div className="flex flex-col justify-center space-y-[2rem]">
            <Increment incrementFunc={incrementFunc} />
            <Decrement decrementFunc={decrementFunc} />
            <Reset resetFunc={resetFunc} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default lol;
