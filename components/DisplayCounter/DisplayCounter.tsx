const DisplayCounter = ({ value }: { value: number }) => {
  return (
    <div className="text-center">
      <h1>Counter Machine Coding</h1>
      <p role="paragraph" className="text-[5rem]" aria-label="display value">
        {value}
      </p>
    </div>
  );
};
export default DisplayCounter;
