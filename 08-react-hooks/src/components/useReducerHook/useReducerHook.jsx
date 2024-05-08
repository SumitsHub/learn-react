import React, { useReducer, useState } from "react";

const useReducerHook = () => {
  // const [counter, setCounter] = useState(0);
  // const [showText, setShowText] = useState(true);

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + 1 };
      case "TOGGLE_SHOW_TEXT":
        return { ...state, showText: !state.showText };
      default:
        return state;
    }
  };

  //? const [state, dispatch] = useReducer(reducer, initialState, init)
  const [state, dispatch] = useReducer(reducer, { counter: 0, showText: true });

  return (
    <div>
      <h1>{state.counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        click here
      </button>

      {state.showText && <p>This is the text</p>}
    </div>
  );
};

export default useReducerHook;
