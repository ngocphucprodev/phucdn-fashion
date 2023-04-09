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
  Typography,
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgb(221 221 221)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const OrderDetail = () => {
  const location = useLocation();
  const [orderDetail, setOrderDetail] = useState("");
  // const [data, setData] = useState("");
  const orderId = location.pathname.split("/");

  useEffect(() => {
    fetch("http://localhost:4000/orderdetail/642d246d5198f260abcd7371")
      .then((response) => response.json())
      .then((data) => setOrderDetail(data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   return fetch(`http://localhost:4000/product/detail/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => data);
  // }, []);

  return (
    <React.Fragment>
      <div>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>
        <table style={{ maxWidth: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Số lượng{" "}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Đơn giá
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Mã sản phẩm
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Mã đơn hàng
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Mã đơn hàng&nbsp;(VND)
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Ngày đặt hàng
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
                align="center"
              >
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderDetail &&
              orderDetail.map((item, index) => {
                return (
                  <StyledTableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      component="th"
                      scope="row"
                    >
                      {/* <CardMedia
                        component="img"
                        image={require(`../../../public/images/${item.image}`)}
                        alt="green iguana"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      /> */}
                      {item.number}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        width: "100px",
                      }}
                    >
                      {item.price}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        width: "400px",
                      }}
                    >
                      {item.product}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        width: "150px",
                      }}
                    >
                      {item.order}
                    </TableCell>
                    {/* <TableCell
                      sx={{
                        borderBottom: "none",
                        width: "150px",
                      }}
                    >
                      {item.number * item.price}
                    </TableCell> */}
                    {/* <TableCell
                      sx={{
                        borderBottom: "none",
                        width: "200px",
                      }}
                    >
                      {item.createdAt}{" "}
                    </TableCell> */}
                    {/* <TableCell sx={{ width: "100px", textAlign: "center" }}>
                      <DeleteIcon
                        onClick={() => handleRemove(orders._id)}
                        sx={{ color: "#1976d2" }}
                      />
                    </TableCell> */}
                    {/* <TableCell align="center" sx={{ borderBottom: "none" }}>
                      <Link
                        to={`/products/edit/${orders._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            color: "#333",
                          }}
                          variant="body2"
                        >
                          In
                          <PrintIcon
                            onClick={() => console.log(orders._id)}
                            sx={{
                              color: "#1976d2",
                              fontSize: "17px",
                              transform: "translate(7px,3px)",
                            }}
                          />
                        </Typography>
                      </Link>
                    </TableCell> */}
                  </StyledTableRow>
                );
              })}
          </TableBody>
          {/* <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Họ và tên{" "}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Số điện thoại
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Địa chỉ
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Tổng tiền&nbsp;(VND)
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Ngày đặt hàng
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
                align="center"
              >
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead> */}
        </table>
      </div>
    </React.Fragment>
  );
};

export default OrderDetail;
