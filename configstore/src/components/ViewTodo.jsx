import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { delTodoAction, getTodoAction, toggleTodoAction } from "../Actions";
const ViewTodo = (props) => {
  console.log(props);
  const { todos } = useSelector((state) => state.todo);
  const { todo } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    getTodoAction()(dispatch);
  }, [dispatch]);
  console.log(todo);

  return (
    <div>
      {todo.isLoading && <h3>....Loading</h3>}
      {todo.isError && <h3>something went wrong</h3>}
      {todos?.map((item) => (
        <div
          key={item.id}
          style={{ gap: "1rem", display: "flex", justifyContent: "center" }}
        >
          {item.title}-{item.status ? "Done" : "Pending"}
          <button
            onClick={() => {
              delTodoAction(item.id)(dispatch);
            }}
          >
            DEL
          </button>
          <button
            onClick={() => toggleTodoAction(item.id, item.status)(dispatch)}
          >
            TOG
          </button>
        </div>
      ))}
    </div>
  );
};
// export default connect(mapStateToProps, { delTodoAction })(ViewTodo);
// connect used in class based component but it can also be used in function to replace hooks
// {HOC:higher order component function}
export default ViewTodo;
