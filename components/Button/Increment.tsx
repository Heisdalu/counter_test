type Props = () => void;

const Increment = ({ incrementFunc }: { incrementFunc: Props }) => {
  return (
    <button className="border-1 p-[0.5rem]" onClick={incrementFunc}>
      Increment
    </button>
  );
};
export default Increment;
