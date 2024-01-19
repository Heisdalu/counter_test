type Props = () => void;

const Decrement = ({ decrementFunc }: { decrementFunc: Props }) => {
  return (
    <button className="border-1 p-[0.5rem]" onClick={decrementFunc}>
      Decrement
    </button>
  );
};
export default Decrement;
