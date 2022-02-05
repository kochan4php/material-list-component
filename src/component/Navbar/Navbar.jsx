import * as React from "react";
import { AppBar, Typography, Container } from "@mui/material";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Navbar = ({ bgcolor, color, children, mb, path }) => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor, mb, boxShadow: 0 }}
      className="materi-page-title"
    >
      <Container>
        <Link to={`/${path}`}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Navigation color={color}>{children}</Navigation>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Navigation color={color}>{children}</Navigation>
          </Typography>
        </Link>
      </Container>
    </AppBar>
  );
};

export default Navbar;
