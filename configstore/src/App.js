import { useSelector } from "react-redux";
import { AddTodo } from "./components/AddTodo";
import { LoginPage } from "./components/Login";
import { Logout } from "./components/Logout";
import Pagination from "./components/Pagination";
import ViewTodo from "./components/ViewTodo";

const App = () => {
  const { isAuth } = useSelector((state) => state.todo);

  return isAuth ? (
    <>
      <AddTodo />
      <ViewTodo />
      <Pagination />
      <Logout />
    </>
  ) : (
    <LoginPage />
  );
};
export default App;
