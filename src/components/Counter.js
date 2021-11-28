import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux_store/slice";

function Counter() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    console.log(state);
    return state.counter.count;
  });
  return (
    <div>
      <div>Counter: {counter}</div>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <br />
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            dispatch(incrementByAmount(Number(value)));
          }}
        >
          Increment By Value
        </button>
      </div>
    </div>
  );
}

export default Counter;
