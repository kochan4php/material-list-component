import * as React from "react";
import { Grid, Box, Container } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Colors from "../../Theme/Colors";
import Content from "./Content";
import Description from "./Description";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const query = useLocation();

  return (
    <>
      {/* props path in navbar component is required!!! */}
      <Navbar bgcolor={Colors.cadetBlue} color={Colors.white} mb={1} path="/">
        Detail
      </Navbar>
      <Container sx={{ position: "relative", height: "100vh" }}>
        <Box sx={{ flexGrow: 1 }} className="detail-page">
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ pr: { xs: 0, md: 2 } }}
              className="detail-page-card"
            >
              <div>
                <Grid container>
                  <Content
                    title={query.state.title}
                    price={query.state.price}
                    img={query.state.img}
                    rate={query.state.rating}
                  />
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ my: 1, pl: { xs: 0, md: 2 } }}>
              <Description />
            </Grid>
          </Grid>
        </Box>
        <Fab
          size="small"
          sx={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            boxShadow: "none",
          }}
          color="secondary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
};

export default Detail;
