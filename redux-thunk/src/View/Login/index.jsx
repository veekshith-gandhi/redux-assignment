import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { getValue } from "@testing-library/user-event/dist/utils";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    axios.get("http://localhost:3030",{data.email,data.password})
  };
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      maxWidth="sm"
    >
      <Box>
        <TextField
          onChange={handleChange}
          type="text"
          value={data.email}
          name="email"
          label="Name"
          variant="outlined"
        />
      </Box>
      <Box>
        <TextField
          onChange={handleChange}
          type="password"
          label="password"
          value={data.password}
          name="password"
          variant="outlined"
        />
      </Box>
      <Box>
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </Box>
    </Container>
  );
};
export default Login;
