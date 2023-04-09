import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Rating,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { minWidth } from "@mui/system";
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContextCart } from "../context/ContextApiProducts";
const ProductDetail = ({ product }) => {
  const location = useLocation();
  // console.log(product);
  // console.log(location.pathname.split("/")[2]);
  const { carts, dispatchCart } = useContext(ContextCart);
  console.log(carts);
  const [image, setImage] = useState(product.image);
  const gallerys = Object.values(product.gallery);
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  const [color, setColor] = useState("S");
  const [size, setSize] = useState({
    weight: 40,
    height: 120,
  });

  function valuetext(value) {
    return `${value}°C`;
  }
  const PrettoSlider = styled(Slider)({
    color: "#1976d2",
    height: 4,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 20,
      width: 20,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#1976d2",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  const handleSize = () => {
    console.log(size);
    if (size.weight < 40 && size.height >= 150) {
      setColor("S");
    }
    if (
      size.weight >= 50 &&
      size.weight < 60 &&
      size.height >= 160 &&
      size.height < 170
    ) {
      setColor("M");
    }
    if (
      size.weight >= 60 &&
      size.weight < 70 &&
      size.height >= 170 &&
      size.height < 180
    ) {
      setColor("L");
    }
    if (size.weight >= 80 && size.height >= 180) {
      setColor("XL");
    }
  };

  return (
    <React.Fragment>
      <Grid container sx={{ mt: 15 }}>
        <Grid container>
          <Grid item xs={12} md={7}>
            <div role="presentation">
              <Breadcrumbs aria-label="breadcrumb">
                <Chip
                  sx={{ border: "1px solid #1976d2 ", color: "#7A7A9D" }}
                  variant="outlined"
                  component="a"
                  href="#"
                  label="Trang chủ"
                  icon={
                    <HomeIcon
                      sx={{ color: "#1976d2 !important" }}
                      fontSize="small"
                    />
                  }
                />
                <Chip
                  sx={{ border: "1px solid #1976d2 ", color: "#7A7A9D" }}
                  variant="outlined"
                  component="a"
                  href="#"
                  label="Sản phẩm"
                />
                <Chip
                  sx={{ border: "1px solid #1976d2 ", color: "#7A7A9D" }}
                  variant="outlined"
                  label={product.name}
                />
              </Breadcrumbs>
            </div>
          </Grid>
          <Grid item xs={12} md={7} sx={{ mt: 1 }}>
            <Box>
              <CardMedia
                component="img"
                sx={{ height: "auto", objectFit: "cover" }}
                image={require(`../../public/images/${
                  image ? image : "err.png"
                }`)}
                alt="Live from space album cover"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              <CardContent sx={{ marginTop: "-10px" }}>
                <Typography variant="h6">{product.name}</Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row-reverse",
                    verticalAlign: "center",
                  }}
                >
                  <Rating
                    name="size-large"
                    sx={{
                      mt: 0,
                      "& .MuiRating-iconFilled": {
                        color: "#1976d2",
                      },
                      "& .MuiRating-iconHover": {
                        color: "#1976d2",
                      },
                    }}
                    defaultValue={4}
                    size="medium"
                  />
                  <Typography
                    sx={{ mt: 1, mb: 2, fontWeight: "bold" }}
                    variant="body2"
                  >
                    Đơn giá: {product.price}Đ
                  </Typography>
                </Box>
                <Divider />
                <Typography
                  sx={{ mt: 2, mb: 2, fontWeight: "bold" }}
                  variant="body2"
                >
                  Chọn ảnh:
                </Typography>
                <Stack direction="row" sx={{ marginTop: "10px" }} spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src={require(`../../public/images/${gallerys[1]}`)}
                    onClick={() => setImage(gallerys[1])}
                    sx={
                      image == gallerys[1]
                        ? { border: "2px solid #1976d2 " }
                        : { border: "2px solid #FFF " }
                    }
                  />
                  <Avatar
                    alt="Travis Howard"
                    src={require(`../../public/images/${gallerys[2]}`)}
                    onClick={() => setImage(gallerys[2])}
                    sx={
                      image == gallerys[2]
                        ? { border: "2px solid #1976d2 " }
                        : { border: "2px solid #FFF " }
                    }
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src={require(`../../public/images/${gallerys[3]}`)}
                    onClick={() => setImage(gallerys[3])}
                    sx={
                      image == gallerys[3]
                        ? { border: "2px solid #1976d2 " }
                        : { border: "2px solid #FFF " }
                    }
                  />
                </Stack>
                <Typography
                  sx={{ mt: 2, mb: 2, fontWeight: "bold" }}
                  variant="body2"
                >
                  Chọn kích thước:
                </Typography>
                <Stack direction="row" spacing={2}>
                  {product.size.map((item) => {
                    return (
                      <Avatar
                        sx={
                          color == item
                            ? {
                                backgroundColor: "#1976d2",
                                border: "1px solid #1976d2",
                                color: "#fff",
                              }
                            : {
                                backgroundColor: "unset",
                                border: "1px solid #1976d2",
                                color: "black",
                              }
                        }
                        onClick={() => setColor(item)}
                      >
                        {item}
                      </Avatar>
                    );
                  })}
                </Stack>
                <Box
                  sx={{
                    marginTop: "20px",
                    width: 400,
                    border: " 2px dashed #1976d2",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ mt: 2, mb: 2, fontWeight: "bold" }}
                      variant="body2"
                    >
                      Giúp bạn chọn size:
                    </Typography>
                    <Typography
                      sx={{
                        mt: 2,
                        mb: 2,
                        width: "180px",
                        marginLeft: "20px",
                      }}
                      variant="body2"
                    >
                      {size.weight + "Kg" + " x " + size.height + "cm"}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PrettoSlider
                      aria-label="Temperature"
                      defaultValue={size.weight}
                      getAriaValueText={valuetext}
                      valueLabelDisplay="auto"
                      step={10}
                      min={10}
                      max={100}
                      onChange={(e) =>
                        handleSize(setSize({ ...size, weight: e.target.value }))
                      }
                    />
                    <Typography
                      sx={{
                        mt: 2,
                        mb: 2,
                        width: "170px",
                        marginLeft: "20px",
                      }}
                      variant="body2"
                    >
                      Cân nặng(Kg):
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <PrettoSlider
                      aria-label="Temperature"
                      defaultValue={size.height}
                      getAriaValueText={valuetext}
                      valueLabelDisplay="auto"
                      step={10}
                      min={100}
                      max={200}
                      onChange={(e) =>
                        handleSize(setSize({ ...size, height: e.target.value }))
                      }
                    />
                    <Typography
                      sx={{
                        mt: 2,
                        mb: 2,
                        width: "180px",
                        marginLeft: "20px",
                      }}
                      variant="body2"
                    >
                      Chiều cao(cm):
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {carts.map((cart) => {
                    // console.log(cart);
                    if (cart._id == location.pathname.split("/")[2]) {
                      return (
                        <Box>
                          <Button
                            variant="outlined"
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
                          <Button sx={{ minWidth: "35px" }}>
                            {cart.quantity}
                          </Button>
                          <Button
                            variant="outlined"
                            onClick={() =>
                              dispatchCart({
                                type: "INCREASE",
                                payload: cart,
                              })
                            }
                          >
                            <AddIcon fontSize="small" />
                          </Button>
                        </Box>
                      );
                    }
                  })}
                  {isLoggedIn ? (
                    <Link to={`/cart`} style={{ textDecoration: "none" }}>
                      <Button
                        startIcon={<ShoppingCartTwoToneIcon />}
                        variant="outlined"
                        onClick={() =>
                          dispatchCart({
                            type: "ADD",
                            payload: { product, quantity: 1 },
                          })
                        }
                      >
                        Thêm vào giỏ hàng
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      startIcon={<ShoppingCartTwoToneIcon />}
                      variant="outlined"
                      onClick={() => alert("Đăng nhập để mua hàng")}
                    >
                      Thêm vào giỏ hàng
                    </Button>
                  )}
                </Box>
                {/* {carts.filter((cart) => {
                  // if (cart._id == "63873a72fa63d3c1f6d2b954") {
                    // return (
                    //   <Box>
                    //     <Button
                    //       onClick={() => {
                    //         if (cart.quantity > 1) {
                    //           dispatchCart({
                    //             type: "DECREASE",
                    //             payload: cart,
                    //           });
                    //         }
                    //       }}
                    //     >
                    //       <RemoveIcon fontSize="small" />
                    //     </Button>
                    //     {cart.quantity}
                    //     <Button
                    //       onClick={() =>
                    //         dispatchCart({
                    //           type: "INCREASE",
                    //           payload: cart,
                    //         })
                    //       }
                    //     >
                    //       <AddIcon fontSize="small" />
                    //     </Button>
                    //   </Box>
                    // );
                  // }
                })} */}

                {/* {_id: '63873a72fa63d3c1f6d2b954', name: 'Áo Sơ Mi Dài Tay Nữ Cafe Logo Yody', price: '549.000', image: 'image3.jpg', size: Array(4), …} */}
                <Typography
                  sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
                  variant="body2"
                >
                  Mô tả sản phẩm:
                </Typography>
                {product.description.split("/").map((item) => {
                  return (
                    <Box>
                      <Typography
                        sx={{ mt: 1, mb: 1 }}
                        variant="body2"
                        component="li"
                      >
                        {item}
                      </Typography>
                      <Divider />
                    </Box>
                  );
                })}
                <Box>
                  <Typography
                    sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
                    variant="body2"
                  >
                    Các chính sách khác:
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                    }}
                  >
                    <Card
                      sx={{
                        width: "40%",
                        marginTop: "20px",
                        boxShadow: "unset",
                        textAlign: "center",
                      }}
                    >
                      <CardMedia
                        sx={{
                          width: "60px",
                          height: "50px",
                          margin: "5px auto",
                        }}
                        component="img"
                        image="https://bizweb.dktcdn.net/100/438/408/themes/900748/assets/ic_payment_fastship.svg?1679564434256"
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2">
                          Miễn phí vận chuyển với mọi đơn hàng từ 498k
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{
                        width: "40%",
                        marginTop: "20px",
                        boxShadow: "unset",
                        textAlign: "center",
                      }}
                    >
                      <CardMedia
                        sx={{
                          width: "60px",
                          height: "50px",
                          margin: "5px auto",
                        }}
                        component="img"
                        image="https://bizweb.dktcdn.net/100/438/408/themes/900748/assets/ic_payment_freechange.svg?1679564434256"
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2">
                          Miễn phí đổi trả trong 15 ngày
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{
                        width: "40%",
                        marginTop: "20px",
                        boxShadow: "unset",
                        textAlign: "center",
                      }}
                    >
                      <CardMedia
                        sx={{
                          width: "60px",
                          height: "50px",
                          margin: "5px auto",
                        }}
                        component="img"
                        image="https://bizweb.dktcdn.net/100/438/408/themes/900748/assets/ic_payment_cod.svg?1679564434256"
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2">
                          Thanh toán khi nhận hàng
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{
                        width: "40%",
                        marginTop: "20px",
                        boxShadow: "unset",
                        textAlign: "center",
                      }}
                    >
                      <CardMedia
                        sx={{
                          width: "60px",
                          height: "50px",
                          margin: "5px auto",
                        }}
                        component="img"
                        image="https://bizweb.dktcdn.net/100/438/408/themes/900748/assets/ic_payment_freechange.svg?1679564434256"
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2">
                          Vận chuyển siêu tốc từ 1 đến 3 ngày
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ProductDetail;
