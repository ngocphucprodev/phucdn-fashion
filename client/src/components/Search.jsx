import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  CardMedia,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextProduct } from "../context/ContextApiProducts";
const Search = () => {
  const products = useContext(ContextProduct);
  // console.log(products);
  // const products = props.products;
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const result = products.find((product) => product.name == e.target.value);
    console.log(result);
    setInput(result);
  };
  return (
    <Box>
      <Paper
        component="form"
        sx={{
          border: " 1px solid #1976d2",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: { md: "300px", xs: "100%", sm: "400px" },
          height: "30px",
          boxShadow: "unset",
        }}
      >
        <InputBase
          fullWidth
          sx={{
            ml: 1,
            fontSize: "12px",
          }}
          placeholder="Áo Sơ Mi Nữ Tay Dài Form Rộng Thoáng Mát"
          onChange={handleInput}
        />
        <IconButton
          type="button"
          sx={{
            p: "7px",
            marginRight: "-4px",
            backgroundColor: "#1976d2",
            borderRadius: "unset",
            ":hover": {
              backgroundColor: "#1976d2",
              color: "#fff",
            },
          }}
          aria-label="search"
        >
          <SearchIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Paper>
      {input && (
        <Link to={`/product/${input._id}`} style={{ textDecoration: "none" }}>
          <Table sx={{ marginTop: "10px" }}>
            <TableBody>
              <TableRow>
                <TableCell sx={{ padding: 0, borderBottom: "unset" }}>
                  <CardMedia
                    component="img"
                    image={require(`../../public/images/${input.image}`)}
                    alt="green iguana"
                    style={{ width: "50px", height: "50px" }}
                  />
                </TableCell>
                <TableCell sx={{ padding: 0, borderBottom: "unset" }}>
                  <Typography variant="body2" color="text.secondary">
                    {input.name}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Link>
      )}
    </Box>
  );
};

export default Search;
