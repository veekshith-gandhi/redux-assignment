import { Layout } from "../components/layout";
import { Counter } from "../view/counter";
import { DisplayTodo } from "../view/display";
import { AddTodo } from "../view/input";

export const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Layout>
        <AddTodo />
        <DisplayTodo />
        <Counter />
      </Layout>
    </div>
  );
};
