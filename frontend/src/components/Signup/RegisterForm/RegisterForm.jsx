import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Main_container,
  Form,
  RegisterButton,
  Error,
} from "./RegisterForm.style";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const RegisterForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

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
      const url = "http://localhost:8080/api/users";
      const headers = {
        "Content-Type": "application/json",
      };
      const { data: res } = await axios.post(url, data, {
        headers: headers,
      });
      //navigate("/login");
      console.log(res.message);
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
            <TextField
              id="firstName"
              name="firstName"
              label="Imię"
              variant="outlined"
              onChange={handleChange}
              value={data.firstName}
              sx={{
                marginTop: "30px",
                marginBottom: "15px",
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
            <TextField
              id="lastName"
              name="lastName"
              label="Nazwisko"
              variant="outlined"
              onChange={handleChange}
              value={data.lastName}
              sx={{
                marginTop: "15px",
                marginBottom: "15px",
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
          <Grid item>{error && <Error>{error}</Error>}</Grid>
          <Grid item>
            <RegisterButton type="submit">Zarejestruj się</RegisterButton>
          </Grid>
        </Grid>
      </Form>
    </Main_container>
  );
};
export default RegisterForm;
