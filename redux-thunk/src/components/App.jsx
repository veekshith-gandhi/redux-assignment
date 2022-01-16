import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Routes from "../Routes/index";
import Registration from "../View/Registration/index";
import Login from "../View/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={Routes.home} component={Registration} />
            <Route exact path={Routes.login} component={Login} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};
export default App;
