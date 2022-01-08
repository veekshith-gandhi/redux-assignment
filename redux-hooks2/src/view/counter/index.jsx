import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/actions/counterAction";

export const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.count);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => increment(1)(dispatch)}>INCREMENT</button>
      <button onClick={() => decrement(1)(dispatch)}>DECREMENT</button>
    </div>
  );
};
