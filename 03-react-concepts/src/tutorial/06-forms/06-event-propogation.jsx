/**
 * Event Propagation - how an event propagate through DOM elements
 * There are 2 phases ->
 * 1. Bubbling -> Event propagate from innermost child to outer most
 * 2. Capturing -> Event propagates from outermost to innermost
 *
 * By default event bubble happens, we can set capture event by passing 3rd argument to addEventListener
 * Event capturing will happen first if present
 *
 * Capturing in React ->
 *  use onClickCapture to capture click event
 */
function EventPropagation() {
  const handleClick = (e, source) => {
    console.log(e.currentTarget === e.target); // true false false -> if clicked innermost div
    console.log("Bubble", source);
  };

  const handleCapture = e => {
    console.log(e.currentTarget === e.target); // false false true -> if clicked innermost div
    console.log("Capture");
  };

  return (
    <div className="flex-center">
      <div
        className="flex-center"
        onClick={e => handleClick(e, "Parent")}
        onClickCapture={handleCapture} // Capture Bubble
        style={{ width: 300, height: 300, border: "1px solid red" }}
      >
        <div
          className="flex-center"
          onClick={e => handleClick(e, "Parent - 2nd")}
          onClickCapture={handleCapture} // this won't trigger if you click it's parent div
          style={{ width: 200, height: 200, border: "1px solid black" }}
        >
          <div
            className="flex-center"
            onClick={e => handleClick(e, "Child")}
            style={{ width: 100, height: 100, border: "1px solid gray" }}
          >
            Click me!
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventPropagation;
