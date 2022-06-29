import { useState } from "react";
import axios from "axios";
import {
  Main_container,
  Form,
  LoginButton,
  Error,
  LoginH1,
} from "./LoginForm.style";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data, {
        headers: headers,
      });
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <Main_container>
      <Form onSubmit={handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            sx={{
              width: "30%",
            }}
          >
            <LoginH1>Logowanie</LoginH1>
          </Grid>
          <Grid
            item
            sx={{
              width: "30%",
            }}
          >
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              value={data.email}
              sx={{
                marginTop: "15px",
                marginBottom: "30px",
                width: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            sx={{
              width: "30%",
            }}
          >
            <FormControl
              variant="outlined"
              sx={{
                width: "100%",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Hasło
              </InputLabel>
              <OutlinedInput
                id="password"
                name="password"
                type={values.showPassword ? "text" : "password"}
                onChange={handleChange}
                value={data.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Hasło"
              />
            </FormControl>
          </Grid>
          <Grid item>{error && <Error>{error}</Error>}</Grid>
          <Grid item>
            <LoginButton type="submit">Zaloguj się</LoginButton>
          </Grid>
        </Grid>
      </Form>
    </Main_container>
  );
};
export default LoginForm;
