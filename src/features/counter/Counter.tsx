import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, resetAmount } from "./counterSlice";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  // making sure that we have number value for increment amount
  const addValue = Number(incrementAmount) || 0;
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(resetAmount());
  };
  return (
    <div className="flex flex-col gap-12">
      <p className="text-3xl text-gray-40 font-bold">Counter Api</p>
      <h1>Count: {count}</h1>
      <button className="relative" onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>

      <div>
        <input
          type="number"
          className="bg-gray-900  my-4 py-2 rounded-lg text-center border-1 border-gray-500 text-white"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
