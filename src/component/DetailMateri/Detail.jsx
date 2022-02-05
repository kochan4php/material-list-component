import * as React from "react";
import { Grid, Box, Container } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Colors from "../../Theme/Colors";
import Content from "./Content";
import Description from "./Description";
import "./Detail.css";

const Detail = () => {
  return (
    <>
      {/* props path in navbar component is required!!! */}
      <Navbar bgcolor={Colors.cadetBlue} color={Colors.white} mb={1} path="/">
        Detail
      </Navbar>
      <Container>
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
                  <Content />
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ my: 1, pl: { xs: 0, md: 2 } }}>
              <Description />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Detail;
