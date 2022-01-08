import { Link } from "react-router-dom";
import { Routes } from "../../../routes";

export const Header = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to={Routes.HomePage}>Home</Link>
        <Link to={Routes.DisplayTodo}>display</Link>
        <Link to={Routes.Counter}>Counter</Link>
      </div>
    </div>
  );
};
