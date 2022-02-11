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
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./List.css";
import Colors from "../../Theme/Colors";
import Navbar from "../Navbar/Navbar";
import TuneIcon from "@mui/icons-material/Tune";
import lotsOfData from "./dataList";
import {
  style,
  styleBtn,
  styleTextField,
  appbarStyle,
  iconButtonStyle,
  navTitleStyle,
} from "./style.js";
import {
  tingkatanSabuk,
  kategori,
  usia,
  harga,
  jenisFile,
} from "./dataFilter.js";

const List = () => {
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState([]);
  const [searchText, setSearchText] = React.useState();
  const [data, setData] = React.useState(lotsOfData);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFilter([]);
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

    let fselected = [...filter];
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

  // LiveSearch logic
  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setData(lotsOfData);
    } else {
      const filteredData = lotsOfData.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      setData(filteredData);
    }
  };

  React.useEffect(() => {
    console.log(filter);
  }, [filter]);

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
                  {/* props path is required!!! */}
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
                  {/* props path is required!!! */}
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
            <Container className="filter-page">
              <Grid container spacing={2} mt={1}>
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
                      sx={styleTextField}
                      onChange={(e) => handleChange(e.target.value)}
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
                    <IconButton
                      className="materi-page-icon-btn"
                      onClick={handleOpen}
                    >
                      <TuneIcon
                        fontSize="large"
                        style={{ color: Colors.cadetBlue }}
                      />
                    </IconButton>
                  </Link>
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
                        <Link to="/">
                          {d.img && (
                            <CardMedia
                              component="img"
                              image={d.img}
                              alt={d.title}
                              className="materi-page-card-img"
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
                        </Link>
                      </Grid>
                      <Grid item xs={8}>
                        <CardContent className="materi-page-card-content">
                          <Link
                            to="/"
                            className="materi-page-card-content-title"
                          >
                            <Typography
                              variant="h6"
                              component="h1"
                              fontSize="17px"
                              lineHeight={1.4}
                            >
                              {d.title}
                            </Typography>
                          </Link>
                          <Typography
                            variant="body"
                            className="materi-page-card-content-rating"
                          >
                            <Rating
                              name="simple-controlled"
                              value={d.valueRating}
                              readOnly
                              className="materi-page-card-content-rating-value"
                            />
                            &nbsp;
                            <p>({d.rating})</p>
                          </Typography>
                          {d.price && (
                            <Typography
                              variant="body2"
                              className="materi-page-card-content-price"
                            >
                              {d.price}
                            </Typography>
                          )}
                          {d.info === "Terlaris" && (
                            <Typography
                              variant="body2"
                              className="materi-page-card-content-info"
                            >
                              <span className="terlaris">{d.info}</span>
                            </Typography>
                          )}
                          {d.info === "Free" && (
                            <Typography
                              variant="body2"
                              className="materi-page-card-content-info"
                            >
                              <span className="free">{d.info}</span>
                            </Typography>
                          )}
                          {d.info === "Terpopuler & Baru" && (
                            <Typography
                              variant="body2"
                              className="materi-page-card-content-info"
                            >
                              <span className="terpopuler-dan-baru">
                                {d.info}
                              </span>
                            </Typography>
                          )}
                        </CardContent>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              ))}
              {data.length === 0 && (
                <Typography variant="h3">No data here</Typography>
              )}
            </Grid>
          </Box>
        </Container>
      </>
    );
  }
};

export default List;
