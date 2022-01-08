import { Header } from "../layout/header";
import { Footer } from "../layout/footer";
import { Provider } from "react-redux";
import { store } from "../../store";
export const Layout = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <main style={{ minHeight: "75vh" }}>{children}</main>
        <Footer />
      </Provider>
    </>
  );
};
