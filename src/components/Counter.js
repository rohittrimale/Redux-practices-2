import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const incrementBy5Handler = () => {
    dispatch({ type: "incrementBy5" });
  };

  const decrementBy5Handler = () => {
    dispatch({ type: "decrementBy5" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}> Increment</button>
        <button onClick={decrementHandler}>Decremnet</button>
      </div>

      <div>
        <button onClick={incrementBy5Handler}> Increment By 5</button>
        <button onClick={decrementBy5Handler}>Decrement by 5</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
