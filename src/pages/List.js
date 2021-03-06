import * as React from "react";
import {
  Box,
  Container,
  IconButton,
  TextField,
  InputAdornment,
  Grid,
  Typography,
  CardContent,
  CardMedia,
  Rating,
  AppBar,
} from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "../component/ListMateri/List.css";
import Colors from "../Theme/Colors";
import Navbar from "../component/Navbar/Navbar";
import TuneIcon from "@mui/icons-material/Tune";
import lotsOfData from "../component/ListMateri/dataList";
import {
  style,
  styleBtn,
  appbarStyle,
  iconButtonStyle,
  navTitleStyle,
} from "../component/ListMateri/style.js";
import { filter } from "../Data/dataFilter.js";
import _ from "lodash";

const { tingkatanSabuk, kategori, usia, harga, jenisFile } = filter;

const List = () => {
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState([]);
  const [searchText, setSearchText] = React.useState();
  const [data, setData] = React.useState(lotsOfData);

  const handleOpen = () => {
    setOpen(true);
    setFilter([]);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    const btn = e.target;
    const btnStyle = btn.style;
    btn.classList.toggle("clicked");
    if (btn.classList.contains("clicked")) {
      btnStyle.backgroundColor = Colors.tangerine;
      btnStyle.color = Colors.white;
    } else {
      btnStyle.backgroundColor = Colors.white;
      btnStyle.color = Colors.tangerine;
    }

    //? Filter logic
    const fselected = [...filter];
    let selectedTrue = filter.includes(e.target.value);

    if (selectedTrue) {
      let withoutDouble = fselected.filter((x) => x !== e.target.value);
      setFilter(withoutDouble);
    } else {
      fselected.push(e.target.value);
      setFilter(fselected);
    }
  };

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  //? LiveSearch logic
  const filterData = (value) => {
    let searchQuery = value.toString().toLowerCase();

    let listData = ["title", "info", "price", ...filter].map((x, i) => {
      return lotsOfData.filter((el) => {
        if (el[x]) {
          return el[x].toString().toLowerCase().indexOf(searchQuery) !== -1;
        }
      });
    });

    let dataset = _.maxBy(listData, function (o) {
      return o.length;
    });
    setData(dataset);
  };

  const filterClick = (value) => {
    handleClose();

    let searchQuery = value.toString().toLowerCase();

    let listData = ["title", "info", "jenisFile", "kategori", filter].map(
      (x, i) => {
        return lotsOfData.filter((el) => {
          if (el[x]) {
            return el[x].toString().toLowerCase().indexOf(searchQuery) !== -1;
          }
        });
      }
    );

    let dataset = _.maxBy(listData, function (o) {
      return o.length;
    });
    setData(dataset);
  };

  if (open) {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ overflow: "auto" }}
        >
          <Box sx={style}>
            <AppBar position="static" sx={appbarStyle} className="nav-title">
              <Container>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <IconButton
                      onClick={handleClose}
                      className="nav-title-btn"
                      sx={iconButtonStyle}
                    >
                      <ArrowBackIcon sx={{ color: Colors.white }} />
                      &nbsp;
                      <Typography
                        variant="h6"
                        className="nav-title-btn-txt"
                        sx={navTitleStyle}
                      >
                        Filter
                      </Typography>
                    </IconButton>
                  </Link>
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <IconButton
                      onClick={handleClose}
                      className="nav-title-btn"
                      sx={iconButtonStyle}
                    >
                      <ArrowBackIcon sx={{ color: Colors.white }} />
                      &nbsp;
                      <Typography
                        variant="h6"
                        className="nav-title-btn-txt"
                        sx={navTitleStyle}
                      >
                        Filter
                      </Typography>
                    </IconButton>
                  </Link>
                </Typography>
              </Container>
            </AppBar>
            <Container
              className="filter-page"
              sx={{ display: "flex", bgcolor: "#ddd" }}
            >
              <Grid container spacing={2} mt={1} sx={{ position: "relative" }}>
                <Grid item xs={12}>
                  <Typography mb={1} variant="h6" className="filter-page-title">
                    Tingkatan Sabuk
                  </Typography>
                  {tingkatanSabuk.map((ts, index) => (
                    <Button
                      variant="outlined"
                      sx={styleBtn}
                      className="btn"
                      key={index}
                      value={ts}
                      onClick={handleClick}
                    >
                      {ts}
                    </Button>
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Typography mb={1} variant="h6" className="filter-page-title">
                    Kategori
                  </Typography>
                  {kategori.map((k, index) => (
                    <Button
                      variant="outlined"
                      sx={styleBtn}
                      className="btn"
                      key={index}
                      value={k}
                      onClick={handleClick}
                    >
                      {k}
                    </Button>
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Typography mb={1} variant="h6" className="filter-page-title">
                    Usia
                  </Typography>
                  {usia.map((u, index) => (
                    <Button
                      variant="outlined"
                      sx={styleBtn}
                      className="btn"
                      key={index}
                      value={u}
                      onClick={handleClick}
                    >
                      {u}
                    </Button>
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Typography mb={1} variant="h6" className="filter-page-title">
                    Harga
                  </Typography>
                  {harga.map((h, index) => (
                    <Button
                      variant="outlined"
                      sx={styleBtn}
                      className="btn"
                      key={index}
                      value={h}
                      onClick={handleClick}
                    >
                      {h}
                    </Button>
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Typography mb={1} variant="h6" className="filter-page-title">
                    Jenis File
                  </Typography>
                  {jenisFile.map((jf, index) => (
                    <Button
                      variant="outlined"
                      sx={styleBtn}
                      className="btn"
                      key={index}
                      value={jf}
                      onClick={handleClick}
                    >
                      {jf}
                    </Button>
                  ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    position: "relative",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    p: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: Colors.tangerine,
                      color: Colors.white,
                      textTransform: "capitalize",
                    }}
                    onClick={() => filterClick(filter)}
                  >
                    Simpan
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Modal>
      </div>
    );
  } else {
    return (
      <>
        {/* props path in navbar component is required!!! */}
        <Navbar bgcolor={Colors.cadetBlue} color={Colors.white} mb={3} path="/">
          Materi
        </Navbar>
        <Container>
          <Box sx={{ flexGrow: 1 }} className="materi-page">
            <Grid container sx={{ mt: 1 }}>
              <form action="" method="post">
                <Grid item xs={10.5} className="materi-page-search-field">
                  <Box noValidate autoComplete="off">
                    <TextField
                      placeholder="Search"
                      variant="outlined"
                      size="small"
                      fullWidth
                      onChange={(e) => handleChange(e.target.value)}
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
                  <IconButton
                    className="materi-page-icon-btn"
                    onClick={handleOpen}
                  >
                    <TuneIcon
                      fontSize="large"
                      sx={{ color: Colors.cadetBlue }}
                    />
                  </IconButton>
                </Grid>
              </form>
              {data.map((d, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  xl={3}
                  className="materi-page-card"
                  key={index}
                >
                  <div>
                    <Grid container>
                      <Grid item xs={4} sx={{ p: 1, pl: 0 }}>
                        {d.img && (
                          <CardMedia
                            component="img"
                            image={d.img}
                            alt={d.title}
                            sx={{ width: "110%", height: "80%" }}
                          />
                        )}
                        {d.video && (
                          <CardMedia
                            component="img"
                            image={d.thumbnail}
                            alt={d.title}
                            className="materi-page-card-img"
                          />
                        )}
                      </Grid>
                      <Grid item xs={8}>
                        <CardContent className="materi-page-card-content">
                          <Link
                            to={`/detail/${index}`}
                            // to="/detail"
                            className="materi-page-card-content-title"
                          >
                            <Typography
                              variant="h6"
                              component="h1"
                              fontSize="17px"
                              lineHeight={1.4}
                              fontWeight={600}
                            >
                              {d.title}
                            </Typography>
                          </Link>
                          {d.info === "Kihon" && (
                            <Typography
                              variant="body2"
                              className="materi-page-card-content-info"
                              sx={{ marginTop: 2.3 }}
                            >
                              <span className="kihon">{d.info}</span>
                            </Typography>
                          )}
                          {d.info === "Kata" && (
                            <Typography
                              variant="body2"
                              className="materi-page-card-content-info"
                              sx={{ marginTop: 2.3 }}
                            >
                              <span className="kata">{d.info}</span>
                            </Typography>
                          )}
                          <Typography
                            variant="body"
                            className="materi-page-card-content-rating"
                          >
                            {d.valueRating ? (
                              <>
                                <Rating
                                  name="simple-controlled"
                                  value={d.valueRating}
                                  readOnly
                                  className="materi-page-card-content-rating-value"
                                />
                                &nbsp;
                                <p>({d.terjual})</p>
                              </>
                            ) : (
                              <>
                                <Rating
                                  name="simple-controlled"
                                  value={0}
                                  readOnly
                                  className="materi-page-card-content-rating-value"
                                />
                                &nbsp;
                                <p>({d.terjual})</p>
                              </>
                            )}
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              ))}
              {data.length === 0 && (
                <Typography variant="h5" align="center">
                  No data here
                </Typography>
              )}
            </Grid>
            <Link to="/tambah-materi">
              <Fab
                aria-label="add"
                sx={{
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  width: "45px",
                  height: "45px",
                  borderRadius: "10px",
                  bgcolor: Colors.tangerine,
                  color: Colors.white,
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: Colors.tangerine,
                    color: Colors.white,
                  },
                }}
              >
                <AddIcon />
              </Fab>
            </Link>
          </Box>
        </Container>
      </>
    );
  }
};

export default List;
