import { Link } from "react-router-dom";
import { Routes } from "../../../routes";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={Routes.HomePage}>
          Todo App
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link " to={Routes.HomePage}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={Routes.AddTodo}>
                Add todo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
