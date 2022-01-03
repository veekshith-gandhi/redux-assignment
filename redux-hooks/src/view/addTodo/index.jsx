import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../../redux/action";

const AddTodoView = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo);
  console.log(state);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodoAction(title, description));
      }}
      className="container mt-5 mb-5"
    >
      <div className="mb-3 ">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="form-control form-control-lg"
          type="text"
          placeholder="Enter todo title"
        />
      </div>
      <div className="mb-3">
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control form-control-lg"
          type="text"
          placeholder="Enter todo description"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        ADD
      </button>
    </form>
  );
};
export default AddTodoView;
