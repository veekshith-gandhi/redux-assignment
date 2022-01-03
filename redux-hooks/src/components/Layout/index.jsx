import { Provider } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { store } from "../../redux/store";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <Header />
      <main style={{ minHeight: "75vh" }}>{children}</main>
      <Footer />
    </Provider>
  );
};

export default Layout;
