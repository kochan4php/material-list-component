import * as React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./List.css";
import Data from "./Data";
import Colors from "../../Theme/Colors";
import Navbar from "../Navbar/Navbar";
import TuneIcon from "@mui/icons-material/Tune";

const List = () => {
  return (
    <>
      <Navbar bgcolor={Colors.cadetBlue} color={Colors.white} mb={3}>
        Materi
      </Navbar>
      <Container>
        <Box sx={{ flexGrow: 1 }} className="materi-page">
          <Grid container sx={{ mt: 1 }}>
            <form action="" method="post">
              <Grid item xs={10.5} className="materi-page-search-field">
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    placeholder="Search"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{ borderColor: Colors.cadetBlue }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon
                            sx={{ fontSize: 30, color: Colors.cadetBlue }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={1.5}
                align="right"
                className="materi-page-btn-field"
              >
                <Link to="/">
                  <IconButton className="materi-page-icon-btn">
                    <TuneIcon
                      fontSize="large"
                      style={{ color: Colors.cadetBlue }}
                    />
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
