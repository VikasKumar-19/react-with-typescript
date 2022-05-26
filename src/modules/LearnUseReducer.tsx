import React, { useReducer } from "react";

interface IState {
  count: number;
}

const initialValue: IState = {
  count: 0,
};

const reducer = (state: IState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const LearnUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log("Hiihih");
  
  return (
    <div>
      <h2>Counter app</h2>
      <button
        onClick={() => {
          dispatch({type:"INCREMENT"});
        }}
      >
        Increment
      </button>
      &nbsp;&nbsp;
      {state.count}
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({type: "DECREMENT"});
        }}
      >
        Decrement
      </button>
      <div>
        <br />
        <button
          onClick={() => {
            dispatch({type: "RESET"});
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default LearnUseReducer;
