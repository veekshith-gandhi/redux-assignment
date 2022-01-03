import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import { AddTodoView, EditTodoView, HomeView } from "../view";
import Layout from "./Layout";
import { Routes } from "../routes";

export const App = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path={Routes.HomePage} component={HomeView} />
          <Route exact path={Routes.AddTodo} component={AddTodoView} />
          <Route path={Routes.EditTodo + ":id"} component={EditTodoView} />
        </Switch>
      </Layout>
    </Router>
  );
};
