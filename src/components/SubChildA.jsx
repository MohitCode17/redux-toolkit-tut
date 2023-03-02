import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByValue } from "../features/counterSlice";

const SubChildA = () => {
  const dispatch = useDispatch();
  const count = useSelector((c) => {
    return c.show.value;
  });
  return (
    <>
      <h2>SubChildA - {count} </h2>
      <button onClick={() => dispatch(increment())}> Update Count</button> &nbsp;
      <button onClick={() => dispatch(incrementByValue(10))}> Update Count By Value</button>
    </>
  );
};

export default SubChildA;
