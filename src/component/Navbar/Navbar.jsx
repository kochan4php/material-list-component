import * as React from "react";
import { Grid, Typography, IconButton, Container } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

const Navbar = ({ bgcolor, color }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{ py: 1, mb: 1.5, bgcolor: bgcolor }}
        className="materi-page-title"
      >
        <Container>
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
        </Container>
      </Grid>
    </Grid>
  );
};

export default Navbar;
