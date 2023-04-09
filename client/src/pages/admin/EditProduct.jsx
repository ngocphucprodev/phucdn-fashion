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
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const EditProduct = () => {
  const location = useLocation();
  const [form, setForm] = useState({
    name: "",
    price: "",
    total: "",
    image: "",
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value ? e.target.value : e.target.files,
    });
  };

  const handleSubmit = (e) => {
    const strImage = form.image;
    const image = strImage.split("\\")[2];
    e.preventDefault();
    fetch(
      `http://localhost:4000/product/edit/${location.pathname.split("/")[3]}`,
      {
        method: "PUT",
        body: JSON.stringify({ ...form, image }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
    console.log(form);
  };

  const [product, setproduct] = useState("");
  useEffect(() => {
    fetch(
      `http://localhost:4000/product/detail/${location.pathname.split("/")[3]}`
    )
      .then((response) => response.json())
      .then((data) => {
        setproduct(Object.values(data));
      });
  }, []);

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
            CHỈNH SỬA SẢN PHẨM
          </Typography>
          <TextField
            fullWidth
            helperText="Nhập tên sản phẩm"
            name="name"
            label={product[1]}
            onChange={handleInput}
          />
          <TextField
            fullWidth
            helperText="Nhập giá sản phẩm"
            name="price"
            onChange={handleInput}
            label={product[2]}
          />
          <TextField
            fullWidth
            helperText="Nhập số lượng sản phẩm"
            name="total"
            label={product[4]}
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
            CẬP NHẬT SẢN PHẨM
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditProduct;
