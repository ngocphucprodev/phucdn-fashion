import { Grid } from "@mui/material";
import React from "react";
import Menu from "./Menu";
import RoutesDasboard from "./Routes";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid
          item
          md={2}
          sx={{
            position: "absolute",
            zIndex: "9999",
            display: { md: "block" },
          }}
        >
          <Sidebar />
        </Grid>
        <Grid item md={10} sx={{ pt: 10, marginLeft: "auto" }}>
          <Menu />
          <RoutesDasboard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
