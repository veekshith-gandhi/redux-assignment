import { Link } from "react-router-dom";
import Routes from "../../../Routes/index";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to={Routes.home}>Registration</Link>
      <Link to={Routes.login}>Login</Link>
    </div>
  );
};
export default Header;
