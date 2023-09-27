const ErrorExample = () => {
  // Using simple variable and not state
  let count = 0;

  const handleClick = () => {
    // incrementing count -> but it does not cause component rerender
    count = count + 1;
    console.log(count); // 1 2 3 ..
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default ErrorExample;
