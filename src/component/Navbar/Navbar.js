import * as React from "react";
import { AppBar, Typography, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import "./Nav.css";

//! props path is required!!!
const Navbar = ({
  bgcolor,
  color,
  children,
  mb,
  path,
  buttonIcon,
  buttonIconPath,
}) => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor, mb, boxShadow: 0 }}
      className="nav-title"
    >
      <Container>
        <Typography
          variant="h6"
          noWrap
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        >
          {/* props path is required!!! */}
          <Link to={path} style={{ textDecoration: "none" }}>
            <Navigation color={color}>{children}</Navigation>
          </Link>
        </Typography>
        <div style={{ display: "flex" }}>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {/* props path is required!!! */}
            <Link to={path} style={{ textDecoration: "none" }}>
              <Navigation color={color}>{children}</Navigation>
            </Link>
          </Typography>
          {buttonIcon && (
            <Link to={buttonIconPath}>
              <IconButton sx={{ color: "white" }}>{buttonIcon}</IconButton>
            </Link>
          )}
        </div>
      </Container>
    </AppBar>
  );
};

export default Navbar;
