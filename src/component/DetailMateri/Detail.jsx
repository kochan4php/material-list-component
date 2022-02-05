import * as React from "react";
import ReactJS from "../../Assets/img/react.png";
import {
  Grid,
  Typography,
  CardContent,
  CardMedia,
  Rating,
  Box,
  Container,
  Button,
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Colors from "../../Theme/Colors";
import "./Detail.css";

const Detail = () => {
  const [expand, setExpand] = React.useState(false);
  const [collapse, setCollapse] = React.useState(false);

  return (
    <>
      <Navbar bgcolor={Colors.cadetBlue} color={Colors.white} mb={0} path="">
        Detail
      </Navbar>
      <Container>
        <Box sx={{ flexGrow: 1 }} className="detail-page">
          <Grid container>
            <Grid item xs={12} sm={6} className="detail-page-card">
              <div>
                <Grid container>
                  <Grid item xs={4} sx={{ py: 1 }}>
                    <CardMedia
                      component="img"
                      image={ReactJS}
                      alt={ReactJS}
                      className="detail-page-card-img"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <CardContent className="detail-page-card-content">
                      <Typography
                        variant="h6"
                        component="h1"
                        fontSize="16px"
                        lineHeight={1.4}
                      >
                        Materi Lengkap Ujian Kenaikan Sabuk Putih
                      </Typography>
                      <Typography
                        variant="body2"
                        fontSize="11px"
                        className="detail-page-card-content-name"
                      >
                        Artem Bondar
                      </Typography>
                      <Typography
                        variant="body"
                        className="detail-page-card-content-rating"
                      >
                        <Rating
                          name="simple-controlled"
                          value={3}
                          readOnly
                          className="detail-page-card-content-rating-value"
                        />
                      </Typography>
                      <Typography
                        variant="body2"
                        fontSize="12px"
                        className="detail-page-card-content-sale"
                      >
                        171 Terjual
                      </Typography>
                      <Typography
                        variant="body"
                        fontWeight={600}
                        fontSize="15px"
                        className="detail-page-card-content-price"
                      >
                        Rp 999.999
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} mb={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  bgcolor: Colors.tangerine,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: Colors.tangerine,
                    boxShadow: "none",
                  },
                }}
              >
                Buy Now
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography varian="h6" mb={1} fontWeight="bold">
                Deskripsi
              </Typography>
              <Typography variant="body2" mb={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                eius quidem provident quaerat expedita aliquid, culpa
                repellendus, exercitationem accusamus eveniet totam itaque
                inventore saepe ut similique veritatis illo magni nulla.
              </Typography>
              {(!expand || collapse) && (
                <Button
                  variant="text"
                  mb={1}
                  sx={{
                    p: 0,
                    textTransform: "capitalize",
                    color: Colors.tangerine,
                  }}
                  onClick={() => {
                    setExpand(true);
                    setCollapse(false);
                  }}
                >
                  Show More
                </Button>
              )}
              {expand && (
                <>
                  <Typography variant="body2" mb={1}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam eius quidem provident quaerat expedita aliquid,
                    culpa repellendus, exercitationem accusamus eveniet totam
                    itaque inventore saepe ut similique veritatis illo magni
                    nulla.
                  </Typography>
                  <Button
                    variant="text"
                    sx={{
                      p: 0,
                      textTransform: "capitalize",
                      color: Colors.tangerine,
                    }}
                    onClick={() => {
                      setCollapse(true);
                      setExpand(false);
                    }}
                  >
                    Hide More
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Detail;
