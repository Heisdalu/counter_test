type Props = (value: number) => void;

const Reset = ({ resetFunc }: { resetFunc: Props }) => {
  const clickHandler = () => {
    resetFunc(0);
  };

  return (
    <button className="border-1 p-[0.5rem]" onClick={clickHandler}>
      Reset
    </button>
  );
};
export default Reset;
