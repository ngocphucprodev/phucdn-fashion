import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Typography,
  TextField,
  TableHead,
} from "@mui/material";

import React, { useContext, useState } from "react";
import { ContextCart } from "../context/ContextApiProducts";

const Cart = () => {
  const { carts, dispatchCart } = useContext(ContextCart);

  // const [orderiD, setorderiD] = useState();

  const userLogin = JSON.parse(localStorage.getItem("user"));
  // localStorage.setItem("carts", JSON.stringify(carts));
  //  console.log(carts);
  const total = carts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const date = new Date();
  const customer = {};
  customer.name = userLogin.username;
  customer.image = userLogin.image;
  customer.telephone = userLogin.telephone;
  customer.address = "Số 266 Thôn 13 Xã Hoà Khánh TP Buôn Ma Thuột";
  customer.email = userLogin.email;
  customer.totalpayment = total + ".000 VND";

  const handleCart = () => {
    new Promise((resolve, reject) => {
      resolve();
    })
      .then(() => {
        return fetch("http://localhost:4000/order/store", {
          method: "POST",
          body: JSON.stringify(customer),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .then(() => {
        return fetch("http://localhost:4000/order/show")
          .then((response) => response.json())
          .then((data) => {
            const orders = carts.map((item) => ({
              number: item.quantity,
              price: item.price,
              product: item._id,
              order: data[data.length - 1]._id,
            }));
            return orders;
          });
      })
      .then((orders) => {
        fetch("http://localhost:4000/orderdetail/store", {
          method: "POST",
          body: JSON.stringify(orders),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      });
  };

  return (
    <React.Fragment>
      <Grid container sx={{ justifyContent: "space-around" }}>
        <Grid md={12}>
          {total ? (
            <Box>
              <TableContainer sx={{ marginBottom: "20px" }} component={Paper}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold" }}
                  color="text"
                >
                  Thông tin khách hàng
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Họ và tên </TableCell>
                      <TableCell align="center">Số điện thoại</TableCell>
                      <TableCell align="center">Địa chỉ</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Thanh toán</TableCell>
                      <TableCell align="center">Ngày mua</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell sx={{ textAlign: "center" }}>
                        {userLogin.username}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {userLogin.telephone}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        Số 266 Thôn 13 Xã Hoà Khánh TP Buôn Ma Thuột
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        {userLogin.email}
                      </TableCell>

                      <TableCell
                        sx={{ textAlign: "center", fontWeight: "bold" }}
                      >
                        {" "}
                        {total ? total + ".000 VND" : ""}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {date.toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold" }}
                  color="text"
                >
                  Thông tin giỏ hàng ({carts.length} sản phẩm)
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>
                    {carts.map((cart, index) => {
                      return (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>
                            <CardMedia
                              component="img"
                              image={require(`../../public/images/${cart.image}`)}
                              alt="green iguana"
                              style={{ width: "100px", height: "100px" }}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {cart.name}
                            <TableCell>{cart.price}Đ</TableCell>
                          </TableCell>

                          <TableCell sx={{ width: "150px" }}>
                            <Button
                              onClick={() => {
                                if (cart.quantity > 1) {
                                  dispatchCart({
                                    type: "DECREASE",
                                    payload: cart,
                                  });
                                }
                              }}
                            >
                              <RemoveIcon fontSize="small" />
                            </Button>
                            {cart.quantity}
                            <Button
                              onClick={() =>
                                dispatchCart({
                                  type: "INCREASE",
                                  payload: cart,
                                })
                              }
                            >
                              <AddIcon fontSize="small" />
                            </Button>
                            <TableCell sx={{ paddingLeft: "35px" }}>
                              {cart.price * cart.quantity}.000 Đ
                            </TableCell>
                          </TableCell>

                          <TableCell sx={{ textAlign: "center" }}>
                            <Button
                              variant="outlined"
                              startIcon={<DeleteIcon />}
                              onClick={() =>
                                dispatchCart({
                                  type: "REMOVE",
                                  payload: cart,
                                })
                              }
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                <Button
                  variant="container"
                  size="medium"
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    margin: "16px",
                    ":hover": {
                      backgroundColor: "#1976d2",
                      color: "#fff",
                    },
                  }}
                  onClick={() => handleCart()}
                >
                  THANH TOÁN
                </Button>
              </TableContainer>
            </Box>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell>
                      <CardMedia
                        component="img"
                        image={"http://maytot.com.vn/upload/image/cart.png"}
                        alt="green iguana"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Bạn chưa có đơn hàng
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Cart;
