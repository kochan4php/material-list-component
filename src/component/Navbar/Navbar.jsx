import * as React from "react";
import { AppBar, Typography, IconButton, Container } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

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
          <Link to="/" style={{ textDecoration: "none" }}>
            <IconButton className="materi-page-title-btn">
              <ArrowBackIosNewIcon sx={{ color: color }} />
              &nbsp;
              <Typography
                variant="h6"
                className="materi-page-title-btn-txt"
                sx={{ color: color }}
              >
                Materi
              </Typography>
            </IconButton>
          </Link>
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <IconButton className="materi-page-title-btn">
              <ArrowBackIosNewIcon sx={{ color: color }} />
              &nbsp;
              <Typography
                variant="h6"
                className="materi-page-title-btn-txt"
                sx={{ color: color }}
              >
                Materi
              </Typography>
            </IconButton>
          </Link>
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Navbar;
