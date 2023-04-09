import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  AppBar,
  Badge,
  Box,
  Container,
  Divider,
  Grid,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextCart } from "../context/ContextApiProducts";
import Nav from "./Nav";
const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/product",
  },
  {
    display: "Danh muc",
    path: "/catalog",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
  {
    display: "Dang ky",
    path: "/register",
  },
];

const Header = () => {
  const { carts } = useContext(ContextCart);
  return (
    <Box>
      <AppBar component="nav" sx={{ backgroundColor: "#fff" }}>
        <Container>
          <Grid container sx={{ padding: 1, justifyContent: { xs: "center" } }}>
            <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h7">Phone: 0825 818 595</Typography>

                <Divider
                  sx={{ height: 28, m: 0.5, borderColor: "white" }}
                  orientation="vertical"
                />
                <Typography variant="h7">
                  Email: ngocphuc1399@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item md={8} sx={{ textAlign: "right" }}>
              <ListItemIcon sx={{ color: "#fff" }}>
                <TwitterIcon />
              </ListItemIcon>
              <ListItemIcon sx={{ color: "#fff" }}>
                {" "}
                <FacebookIcon />
              </ListItemIcon>
              <ListItemIcon sx={{ color: "#fff" }}>
                {" "}
                <InstagramIcon />
              </ListItemIcon>
              <ListItemIcon>
                <Badge badgeContent={carts.length ?? "0"} color="primary">
                  <Link to="/cart">
                    <ShoppingCartIcon sx={{ color: "#fff" }} />
                  </Link>
                </Badge>
              </ListItemIcon>
            </Grid>
          </Grid>
        </Container>
        <Nav />
      </AppBar>
    </Box>
  );
};

export default Header;
