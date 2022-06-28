import { useState } from "react";
import { Main_container, Form, RegisterButton } from "./RegisterForm.style";
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

  return (
    <Main_container>
      <Form>
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
              label="Imię"
              variant="outlined"
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
              id="surName"
              label="Nazwisko"
              variant="outlined"
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
                type={values.showPassword ? "text" : "password"}
                value={values.password}
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
              label="Email"
              variant="outlined"
              sx={{
                marginTop: "15px",
                marginBottom: "30px",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item>
            <RegisterButton type="submit">Zarejestruj się</RegisterButton>
          </Grid>
        </Grid>
      </Form>
    </Main_container>
  );
};
export default RegisterForm;
