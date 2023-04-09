import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    nav("/login");
    window.location.reload();
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <AppBar
        component="nav"
        sx={{ display: "flex", backgroundColor: "darkslategray" }}
      >
        <Toolbar>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            {mainNav.map((item, index) => (
              <Link key={index} to={item.path} sx={{ color: "#fff" }}>
                {item.display}
              </Link>
            ))}
          </Box> */}
          <Box sx={{ flexGrow: 1, textAlign: "left" }}>
            {/* <Typography
              variant="h6"
              sx={{ my: 2, display: { xs: "none", md: "block" } }}
            >
              LOGO
            </Typography> */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/* <Box sx={{ flexGrow: 1, padding: "10px" }}>
            <TextField fullWidth label="Tìm kiếm" id="fullWidth" />
          </Box> */}
          <Box>
            {userLogin ? (
              <Tooltip title={userLogin.username} placement="bottom">
                <Avatar
                  alt="Remy Sharp"
                  onClick={() => setOpen(!open)}
                  src={require(`../../../public/images/${userLogin.image}`)}
                />
              </Tooltip>
            ) : (
              <Tooltip title="Login" placement="bottom">
                <Link to="/login">
                  <AccountCircleOutlinedIcon
                    fontSize="large"
                    sx={{ color: "#1976d2" }}
                  />{" "}
                </Link>
              </Tooltip>
            )}
            <Paper
              sx={{
                width: "150px",
                // marginLeft: "auto",
                position: "absolute",
                bottom: "-120px",
                right: 0,
                ...(open ? { display: "block" } : { display: "none" }),
              }}
            >
              <MenuList>
                <MenuItem>Thông tin của bạn</MenuItem>
                <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
              </MenuList>
            </Paper>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Menu;
