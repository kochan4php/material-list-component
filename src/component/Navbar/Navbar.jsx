import * as React from "react";
import { AppBar, Typography, Container } from "@mui/material";
import Navigation from "./Navigation";

const Navbar = ({ bgcolor, color }) => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: bgcolor, mb: 3, boxShadow: 0 }}
      className="materi-page-title"
    >
      <Container>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        >
          <Navigation color={color} />
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          <Navigation color={color} />
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Navbar;
