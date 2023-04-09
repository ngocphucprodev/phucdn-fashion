import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  // const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(true);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <List
      sx={{
        width: "100%",
        ...(mobileOpen ? { maxWidth: "200px" } : { maxWidth: "55px" }),
        height: "auto",
        backgroundColor: "darkslategray",
        color: "#fff",
        left: "-10px",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          sx={{
            backgroundColor: "darkslategray",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: " 20px",
          }}
          component="div"
          id="nested-list-subheader"
        >
          <HomeIcon
            sx={{
              color: "#fff",
              ...(mobileOpen ? { display: "block" } : { display: "none" }),
            }}
          />{" "}
          {mobileOpen ? "ADMIN" : ""}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              ...(mobileOpen
                ? { transform: "rotate(0)" }
                : { transform: "rotate(180deg)" }),
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </ListSubheader>
      }
    >
      <Link>
        <ListItemButton>
          <ListItemIcon>
            <PaidIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: "#fff",
              ...(mobileOpen ? { display: "block" } : { display: "none" }),
            }}
            primary="Doanh thu"
          />
        </ListItemButton>
      </Link>

      <Divider />
      <Link to="/users">
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: "#fff",
              ...(mobileOpen ? { display: "block" } : { display: "none" }),
            }}
            primary="Khách hàng"
          />
        </ListItemButton>
      </Link>

      <Divider />
      <Link to="products">
        <ListItemButton
        // onClick={() => {
        //   setOpen(!open);
        // }}
        >
          <ListItemIcon>
            <StoreIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: "#fff",
              ...(mobileOpen ? { display: "block" } : { display: "none" }),
            }}
            primary="Sản phẩm"
          />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </ListItemButton>
      </Link>
      <Divider />
      <Link to="orders">
        <ListItemButton
        // onClick={() => {
        //   setOpen(!open);
        // }}
        >
          <ListItemIcon>
            <ShoppingCartIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: "#fff",
              ...(mobileOpen ? { display: "block" } : { display: "none" }),
            }}
            primary="Đơn hàng"
          />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </ListItemButton>
      </Link>

      <Divider />
      <Link to="products">
        <ListItemButton
        // onClick={() => {
        //   setOpen(!open);
        // }}
        >
          <ListItemIcon>
            <SettingsIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: "#fff",
              ...(mobileOpen ? { display: "block" } : { display: "none" }),
            }}
            primary="Cài đặt"
          />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </ListItemButton>
      </Link>

      {/* <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText>
              <Link to="/addproduct">Add</Link>
            </ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText>Danh sach</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Divider /> */}
      {/* <Link to="/users">
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartSharpIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "#fff" }} primary="Đơn hàng" />
        </ListItemButton>
      </Link> */}
    </List>
  );
};

export default Sidebar;
