import { logoutSuccessAction } from "../Actions";
import { useDispatch } from "react-redux";

export const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    logoutSuccessAction(false)(dispatch);
  };
  return (
    <div>
      <h3>Logout</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
