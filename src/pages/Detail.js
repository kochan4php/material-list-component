import * as React from "react";
import {
  Grid,
  Box,
  Container,
  Button,
  IconButton,
  AppBar,
  Typography,
  CardMedia,
  CardContent,
  Rating,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link, useParams } from "react-router-dom";
import Colors from "../Theme/Colors";
import lotsOfData from "../component/ListMateri/dataList";
import zuki from "../Assets/img/zuki.png";
import OiZukiChudan from "../Assets/img/Oi-zuki-chudan.png";
import GyakuZuki from "../Assets/img/Gyaku-zuki.png";
import "../component/DetailMateri/Detail.css";

const detailMateri = {
  id: 1,
  img: zuki,
  title: "Zuki (Pukulan)",
  valueRating: 5,
  terjual: "70",
  price: "299.000,00",
  info: "Terpopuler & Baru",
  kategori: "Berbayar",
  jenisFile: "pdf",
  deskripsi:
    "Dalam karate, tsuki atau zuki adalah istilah yang digunakan untuk pukulan. Pukulan jenis ini biasanya dilakukan menggunakan 2 ruas jari depan, yang disebut dengan seiken (tinju depan).",
};

const Detail = () => {
  const param = useParams();
  const [detail, setDetail] = React.useState([]);
  const [expand, setExpand] = React.useState(false);
  const [collapse, setCollapse] = React.useState(false);

  React.useEffect(() => {
    setDetail(lotsOfData[param.id]);
    console.log(lotsOfData[param.id]);
  }, []);

  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: Colors.cadetBlue, mb: 2, boxShadow: 0 }}
        className="nav-title"
      >
        <Container>
          <Typography
            variant="h6"
            noWrap
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton className="nav-title-btn">
                <ArrowBackIcon sx={{ color: Colors.white }} />
                &nbsp;
                <Typography
                  variant="h6"
                  className="nav-title-btn-txt"
                  sx={{ color: Colors.white }}
                >
                  Detail
                </Typography>
              </IconButton>
            </Link>
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              {/* props path is required!!! */}
              <Link to="/" style={{ textDecoration: "none" }}>
                <IconButton className="nav-title-btn">
                  <ArrowBackIcon sx={{ color: Colors.white }} />
                  &nbsp;
                  <Typography
                    variant="h6"
                    className="nav-title-btn-txt"
                    sx={{ color: Colors.white }}
                  >
                    Detail
                  </Typography>
                </IconButton>
              </Link>
            </Typography>
            <Link to={`/edit-materi/${detail.id}`}>
              {/* <Link to={`/edit-materi`}> */}
              <IconButton sx={{ color: "white" }}>
                <EditIcon />
              </IconButton>
            </Link>
          </div>
        </Container>
      </AppBar>
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
                  {detail.img && (
                    <Grid item xs={4} sx={{ pb: 1 }}>
                      <CardMedia
                        component="img"
                        image={detail.img}
                        alt={detail.title}
                        className="detail-page-card-img"
                      />
                    </Grid>
                  )}
                  <Grid item xs={8}>
                    <CardContent className="detail-page-card-content">
                      <Typography
                        variant="h6"
                        component="h1"
                        fontSize="15px"
                        lineHeight={1.4}
                        mb={0.5}
                        color="#000"
                      >
                        {detail.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        fontSize="13px"
                        sx={{ fontWeight: "bold" }}
                      >
                        {detail.info}
                      </Typography>
                      <Typography
                        variant="body"
                        className="detail-page-card-content-rating"
                      >
                        <Rating
                          name="simple-controlled"
                          value={detail.valueRating}
                          readOnly
                          className="detail-page-card-content-rating-value"
                        />
                      </Typography>
                      <Link>
                        <Typography
                          variant="body2"
                          fontSize="14px"
                          sx={{ mb: 0.5, color: Colors.cadetBlue }}
                          className="detail-page-card-content-sale"
                        >
                          Download Materi
                        </Typography>
                      </Link>
                    </CardContent>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: 1, pl: { xs: 0, md: 2 } }}>
              <Typography varian="h6" fontWeight="bold">
                Tingkatan
              </Typography>
              {detail.filter ? (
                <Typography variant="body2" mb={1}>
                  Sabuk {detail.filter[0]}
                </Typography>
              ) : (
                <Typography variant="body2" mb={1}>
                  Sabuk Putih
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: 1, pl: { xs: 0, md: 2 } }}>
              <Typography varian="h6" fontWeight="bold">
                Deskripsi
              </Typography>
              <div
                dangerouslySetInnerHTML={{
                  __html: detail.deskripsi,
                }}
              ></div>
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
                  Selengkapnya
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
                      minWidth: 0,
                      textTransform: "capitalize",
                      color: Colors.tangerine,
                    }}
                    onClick={() => {
                      setCollapse(true);
                      setExpand(false);
                    }}
                  >
                    Lebih Sedikit
                  </Button>
                </>
              )}
            </Grid>
            <Grid item xs={12} mt={0.8}>
              <Button
                variant="outline"
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  bgcolor: Colors.danger,
                  color: Colors.white,
                  borderRadius: "8px",
                  boxShadow: "none",
                  my: 1,
                  "&:hover": {
                    border: `1px solid ${Colors.danger}`,
                    color: Colors.danger,
                  },
                }}
              >
                Delete Materi
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Detail;
