import { Provider } from "react-redux";
import CounterApp from "./counter/Counter";
import store from "../store/store";
import Timer from "./Timer";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Timer />
        <CounterApp />
      </Provider>
    </div>
  );
};
export default App;
