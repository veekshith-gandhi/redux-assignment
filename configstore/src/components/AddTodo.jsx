import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../Actions";
import { v4 as uuid } from "uuid";

export const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.todo);

  const handleSubmit = () => {
    const payload = {
      title: text,
      status: false,
      id: uuid(),
    };
    addTodoAction(payload)(dispatch);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Token : {token}</h2>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Something"
      />

      <button onClick={handleSubmit}>ADD</button>
    </div>
  );
};
