import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Main_container,
  Form,
  AddButton,
  Error,
  AddH1,
} from "./AddAdvertisementForm.style";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

const AddAdvertisementForm = () => {
  const [data, setData] = useState({
    itemName: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const [category, setCategory] = useState("");

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    setData({ ...data, category: category });
  };

  const handleUpdateCategory = (e) => {
    setData({ ...data, category: category });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, category: category });
    console.log(data);
  };

  const categories = [
    {
      value: "Motoryzacja",
      label: "Motoryzacja",
    },
    {
      value: "Elektronika",
      label: "Elektronika",
    },
    {
      value: "Dom i ogród",
      label: "Dom i ogród",
    },
    {
      value: "Sport i hobby",
      label: "Sport i hobby",
    },
    {
      value: "Moda",
      label: "Moda",
    },
  ];

  return (
    <Main_container>
      <Form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid
            item
            lg={12}
            sx={{
              width: "30%",
            }}
          >
            <AddH1>DODAJ OGŁOSZENIE</AddH1>
          </Grid>
          <Grid
            item
            lg={12}
            sx={{
              width: "30%",
            }}
          >
            <TextField
              id="itemName"
              name="itemName"
              label="Nazwa"
              variant="outlined"
              onChange={handleChange}
              value={data.itemName}
              sx={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            lg={6}
            sx={{
              width: "30%",
            }}
          >
            <FormControl
              variant="outlined"
              sx={{
                width: "100%",
              }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Cena
              </InputLabel>
              <OutlinedInput
                id="price"
                name="price"
                type="number"
                min="0"
                onChange={handleChange}
                value={data.price}
                endAdornment={
                  <InputAdornment position="end">zł</InputAdornment>
                }
                label="Cena"
              />
            </FormControl>
          </Grid>
          <Grid
            item
            lg={6}
            sx={{
              width: "30%",
            }}
          >
            <TextField
              id="category"
              select
              label="Kategoria"
              value={category}
              name="category"
              onChange={handleChangeCategory}
              sx={{
                width: "100%",
              }}
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            lg={12}
            sx={{
              width: "30%",
            }}
          >
            <TextField
              id="description"
              name="description"
              label="Opis"
              variant="outlined"
              multiline
              maxRows={7}
              onChange={handleChange}
              value={data.description}
              sx={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            lg={12}
            sx={{
              width: "30%",
            }}
          >
            <TextField
              id="image"
              name="image"
              type="file"
              variant="outlined"
              onChange={handleChange}
              value={data.image}
              sx={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid item lg={12}>
            {error && <Error>{error}</Error>}
          </Grid>
          <Grid
            item
            lg={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddButton type="submit" onMouseEnter={handleUpdateCategory}>
              Dodaj
            </AddButton>
          </Grid>
        </Grid>
      </Form>
    </Main_container>
  );
};
export default AddAdvertisementForm;
