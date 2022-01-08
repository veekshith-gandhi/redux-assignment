import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { delteTodo, toggleTodo } from "../../store/actions";

export const DisplayTodo = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      {todos?.map((item) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
          key={item.id}
        >
          {item.name} - {item.status ? "Done" : "Pending"}
          <button onClick={() => delteTodo(item.id)(dispatch)}>DEL</button>
          <button onClick={() => toggleTodo(item.id)(dispatch)}>TOG</button>
        </div>
      ))}
    </div>
  );
};
