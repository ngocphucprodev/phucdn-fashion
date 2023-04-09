import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  CardMedia,
  IconButton,
  InputBase,
  List,
  ListItem,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
const Products = () => {
  const [products, setproducts] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/product/show")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }, []);

  const handleRemove = (id) => {
    fetch(`http://localhost:4000/product/delete/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  };
  return (
    <React.Fragment>
      <div>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Paper
            component="form"
            sx={{
              border: " 1px solid #1976d2",
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: { md: "400px", xs: "100%", sm: "400px" },
              boxShadow: "unset",
            }}
          >
            <InputBase
              fullWidth
              sx={{ ml: 1, fontSize: "14px" }}
              placeholder="Áo Sơ Mi Nữ Tay Dài Form Rộng Thoáng Mát"
              // onChange={handleInput}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Paper>
          <Link
            to="/addproduct"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <Button variant="outlined">THÊM MỚI</Button>
          </Link>
        </Box>
        <table style={{ maxWidth: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Ảnh </TableCell>
              <TableCell align="center">Tên sản phẩm</TableCell>
              <TableCell align="center">Số lượng</TableCell>
              <TableCell align="center">Đơn giá&nbsp;(VND)</TableCell>
              <TableCell align="center">Mổ tả&nbsp;(g)</TableCell>
              <TableCell align="center">Ngày tạo</TableCell>
              <TableCell align="center">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <CardMedia
                        component="img"
                        image={require(`../../../public/images/${
                          product.image ? product.image : "err.png"
                        }`)}
                        alt="green iguana"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell sx={{ width: "100px", textAlign: "center" }}>
                      {product.total}
                    </TableCell>
                    <TableCell sx={{ width: "100px", textAlign: "center" }}>
                      {product.price} Đ
                    </TableCell>
                    <TableCell>
                      <List sx={{ overflow: "auto", maxHeight: "100px" }}>
                        {product.description.split("/").map((list) => (
                          <ListItem>- {list}</ListItem>
                        ))}{" "}
                      </List>
                    </TableCell>
                    <TableCell>{product.createdAt} Đ</TableCell>
                    <TableCell sx={{ width: "100px", textAlign: "center" }}>
                      <DeleteIcon
                        onClick={() => handleRemove(product._id)}
                        sx={{ color: "#1976d2" }}
                      />
                    </TableCell>
                    <TableCell>
                      <Link to={`/products/edit/${product._id}`}>
                        <EditOutlinedIcon
                          onClick={() => console.log(product._id)}
                          sx={{ color: "#1976d2" }}
                        />
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Products;
