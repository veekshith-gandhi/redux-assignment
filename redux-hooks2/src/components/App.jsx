import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "../components/layout";
import { Routes } from "../routes";
import { Counter } from "../view/counter";
import { DisplayTodo } from "../view/display";
import { AddTodo } from "../view/input";

export const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={Routes.HomePage} component={AddTodo} />
            <Route exact path={Routes.DisplayTodo} component={DisplayTodo} />
            <Route exact path={Routes.Counter} component={Counter} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};
