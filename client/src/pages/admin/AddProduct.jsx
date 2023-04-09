import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    total: "",
    image: "",
  });

  const handleSubmit = (e) => {
    const strImage = form.image;
    const image = strImage.split("\\")[2];
    e.preventDefault();
    fetch("http://localhost:4000/product/store", {
      method: "POST",
      body: JSON.stringify({ ...form, image }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const handleInput = (e) => {
    console.log(form);
    setForm({
      ...form,
      [e.target.name]: e.target.value ? e.target.value : e.target.files,
    });
  };
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item md={6}>
        {" "}
        <Box>
          <Typography
            sx={{ mt: 4, mb: 2, textAlign: "center" }}
            variant="h5"
            component="div"
          >
            THÊM SẢN PHẨM
          </Typography>
          <TextField
            fullWidth
            label="Nhập tên sản phẩm"
            helperText="Please enter name"
            name="name"
            onChange={handleInput}
          />
          <TextField
            fullWidth
            label="Nhập giá sản phẩm"
            helperText="Please enter price"
            name="price"
            onChange={handleInput}
          />
          <TextField
            fullWidth
            label="Nhập số lượng"
            helperText="Please enter number"
            name="total"
            onChange={handleInput}
          />
          <input type="file" name="image" onChange={handleInput} />

          <Button
            fullWidth
            variant="outlined"
            onClick={handleSubmit}
            sx={{ mt: 3 }}
            type="submit"
          >
            THÊM SẢN PHẨM
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AddProduct;
