import * as React from "react";
import { Box, Container, Grid, IconButton, TextField } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { Link } from "react-router-dom";
import "./List.css";
import Data from "./Data";
import Colors from "../../Theme/Colors";
import Navbar from "../Navbar/Navbar";

const List = () => {
  return (
    <>
      <Navbar bgcolor={Colors.cadetBlue} color={Colors.white} />
      <Container>
        <Box sx={{ flexGrow: 1 }} className="materi-page">
          <Grid container sx={{ mt: 1 }}>
            <form action="" method="post">
              <Grid item xs={10} className="materi-page-search-field">
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    id="outlined"
                    placeholder="Search"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={2}
                align="center"
                className="materi-page-btn-field"
              >
                <Link to="/">
                  <IconButton className="materi-page-icon-btn">
                    <TuneIcon sx={{ fontSize: "1.65em" }} />
                  </IconButton>
                </Link>
              </Grid>
            </form>
            <Data />
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default List;
