import { Provider } from "react-redux";
import { store } from "../../Redux/Store";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <main style={{ minHeight: "75vh" }}>{children}</main>
        <Footer />
      </Provider>
    </div>
  );
};
export default Layout;
