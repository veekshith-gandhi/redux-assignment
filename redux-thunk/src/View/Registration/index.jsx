import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerationAction } from "../../Redux/Actions";

const Registration = () => {
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setData({
      name: name,
      email: email,
      password: password,
      username: userName,
      number: number,
      description: description,
    });
    registerationAction(data)(dispatch);
  };
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      maxWidth="sm"
    >
      <Box>
        <TextField
          onChange={(e) => setName(e.target.value)}
          type="text"
          label="Name"
          variant="outlined"
        />
      </Box>
      <Box>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value=""
          label="email"
          variant="outlined"
        />
      </Box>
      <Box>
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          label="password"
          variant="outlined"
        />
      </Box>
      <Box>
        <TextField
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          label="user name"
          variant="outlined"
        />
      </Box>
      <Box>
        <TextField
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          label="Mobile no"
          variant="outlined"
        />
      </Box>
      <Box>
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          label="Description"
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
export default Registration;
