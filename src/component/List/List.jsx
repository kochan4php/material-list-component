import * as React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./List.css";
import Data from "./Data";
import Colors from "../../Theme/Colors";
import Navbar from "../Navbar/Navbar";
import { BsSliders } from "react-icons/bs";

const List = () => {
  return (
    <>
      <Navbar bgcolor={Colors.cadetBlue} color={Colors.white} />
      <Container>
        <Box sx={{ flexGrow: 1 }} className="materi-page">
          <Grid container sx={{ mt: 1 }}>
            <form action="" method="post">
              <Grid item xs={10.5} className="materi-page-search-field">
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    id="outlined"
                    placeholder="Search"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ fontSize: 30 }} />
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
                {window.innerWidth < 599 ? (
                  <Link to="/">
                    <IconButton className="materi-page-icon-btn">
                      <BsSliders style={{ fontSize: "1.5em" }} />
                    </IconButton>
                  </Link>
                ) : (
                  <Button
                    variant="contained"
                    sx={{ height: "100%", width: "90%" }}
                  >
                    Medium
                  </Button>
                )}
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
