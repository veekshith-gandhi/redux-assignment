import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../store/actions/todoAction";

export const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const payload = {
      id: uuid(),
      name: value,
      status: false,
    };
    addTodo(payload)(dispatch);
  };

  return (
    <div>
      <h1>TODO</h1>
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="add item"
      ></input>
      <button onClick={handleSubmit}>ADD</button>
    </div>
  );
};
