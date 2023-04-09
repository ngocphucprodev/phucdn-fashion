import {
  Box,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Skeleton,
  Stack,
  Button,
  FormLabel,
  FormControl,
} from "@mui/material";
import React, { useContext, useReducer } from "react";
import { ContextProduct } from "../context/ContextApiProducts";
import reducer from "../context/reducer";

const SkeletonCard = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Box>
          <FormLabel id="demo-radio-buttons-group-label">
            Loại sản phẩm
          </FormLabel>
          <Box
            sx={{
              "&::-webkit-scrollbar": {
                width: "7px",
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 5px #DDE1EF",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#7A7A9D",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "black",
              },

              width: "250px",
              height: "250px",
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Button
              sx={{
                color: "#1976d2",
                backgroundColor: "unset",
                border: "1px solid #1976d2",
                boxShadow: "unset",
                marginTop: "10px",
                textTransform: "capitalize",

                ":hover": {
                  color: "#1976d2",
                  backgroundColor: "unset",
                  border: "1px solid #1976d2",
                  boxShadow: "unset",
                },
              }}
              variant="contained"
            >
              Áo sơmi nam
            </Button>
            <Button
              sx={{
                color: "#1976d2",
                backgroundColor: "unset",
                border: "1px solid #1976d2",
                boxShadow: "unset",
                marginTop: "10px",
                textTransform: "capitalize",

                ":hover": {
                  color: "#1976d2",
                  backgroundColor: "unset",
                  border: "1px solid #1976d2",
                  boxShadow: "unset",
                },
              }}
              variant="contained"
            >
              Áo Sơmi Nữ
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",

                ":hover": {
                  color: "#1976d2",
                  backgroundColor: "unset",
                  border: "1px solid #1976d2",
                  boxShadow: "unset",
                },
              }}
              variant="contained"
            >
              Áo sơmi trẻ em
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",

                ":hover": {
                  color: "#1976d2",
                  backgroundColor: "unset",
                  border: "1px solid #1976d2",
                  boxShadow: "unset",
                },
              }}
              variant="contained"
            >
              Áo polo thể thể thao
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",

                ":hover": {
                  color: "#1976d2",
                  backgroundColor: "unset",
                  border: "1px solid #1976d2",
                  boxShadow: "unset",
                },
              }}
              variant="contained"
            >
              Áo polo trẻ em{" "}
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",

                ":hover": {
                  color: "#1976d2",
                  backgroundColor: "unset",
                  border: "1px solid #1976d2",
                  boxShadow: "unset",
                },
              }}
              variant="contained"
            >
              Áo Polo Nữ
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",

                ":hover": {
                  color: "#1976d2",
                  backgroundColor: "unset",
                  border: "1px solid #1976d2",
                  boxShadow: "unset",
                },
              }}
              variant="contained"
            >
              Áo Polo Nam
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",

                ":hover": {
                  color: "#1976d2",
                  backgroundColor: "unset",
                  border: "1px solid #1976d2",
                  boxShadow: "unset",
                },
              }}
              variant="contained"
            >
              Quần kaki nữ
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",
                marginBottom: "10px",
                ":hover": {
                  color: "#1976d2",
                  backgroundColor: "unset",
                  border: "1px solid #1976d2",
                  boxShadow: "unset",
                },
              }}
              variant="contained"
            >
              Quần Jean nam
            </Button>
          </Box>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Bảng giá</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="300.000"
                control={<Radio />}
                label="Dưới 300.000đ"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="200.000đ - 300.000đ"
                // onClick={() =>
                //   dispatch({
                //     type: "FILTER-300.000",
                //     payload: "300.000",
                //   })
                // }
              />

              <FormControlLabel
                value="other"
                control={<Radio />}
                label="300.000đ - 450.000đ"
              />
              <FormControlLabel
                value="othe1r"
                control={<Radio />}
                label="500.000đ - 700.000đ"
              />

              <FormControlLabel
                value="700.000"
                control={<Radio />}
                label="Trên 700.000đ"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>
      <Grid
        item
        xs={9}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {Array.apply(null, Array(12)).map((val, idx) => (
          <Grid item xs={4} sx={{ marginBottom: "20px" }} key={idx}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={250} height={300} />

              <Skeleton variant="rounded" width={250} height={20} />

              <Skeleton variant="rounded" width={100} height={20} />
              <Stack direction="row" sx={{ marginTop: "10px" }} spacing={2}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default SkeletonCard;
