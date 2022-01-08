import { loginSuccessAction } from "../Actions";
import { useDispatch } from "react-redux";
export const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(loginSuccessAction(Date.now()));
  };
  return (
    <div>
      <h3>Login</h3>
      <button onClick={() => handleLogin()}>Please Login</button>
    </div>
  );
};
