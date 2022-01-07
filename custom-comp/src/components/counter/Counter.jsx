import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/action";

const CounterApp = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.counter);
  return (
    <div>
      <h1>Counter</h1>
      <h1>{state.counter}</h1>
      <button onClick={() => increment(1)(dispatch)}>increase</button>
      <button onClick={() => decrement(1)(dispatch)}>decreses</button>
    </div>
  );
};

export default CounterApp;
