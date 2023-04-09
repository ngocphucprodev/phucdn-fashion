import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: 2,
        marginTop: "100px",
      }}
    >
      <Typography
        gutterBottom
        sx={{ textAlign: "center", color: "#fff" }}
        variant="body1"
        component="div"
      >
        @ Bản quyền thuộc về Phucdn All right reserved
      </Typography>
    </Box>
  );
};

export default Footer;
