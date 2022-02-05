import * as React from "react";
import {
  Grid,
  Typography,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./List.css";
import lotsOfData from "./dataList";

const Data = () => {
  return (
    <>
      {lotsOfData.map((data, index) => (
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
                <Link to="/detail">
                  {data.img && (
                    <CardMedia
                      component="img"
                      image={data.img}
                      alt={data.title}
                      className="materi-page-card-img"
                    />
                  )}
                  {data.video && (
                    <CardMedia
                      component="img"
                      image={data.thumbnail}
                      alt={data.title}
                      className="materi-page-card-img"
                    />
                  )}
                </Link>
              </Grid>
              <Grid item xs={8}>
                <CardContent className="materi-page-card-content">
                  <Link to="/detail" className="materi-page-card-content-title">
                    <Typography
                      variant="h6"
                      component="h1"
                      fontSize="17px"
                      lineHeight={1.4}
                    >
                      {data.title}
                    </Typography>
                  </Link>
                  <Typography
                    variant="body"
                    className="materi-page-card-content-rating"
                  >
                    <Rating
                      name="simple-controlled"
                      value={data.valueRating}
                      readOnly
                      className="materi-page-card-content-rating-value"
                    />
                    &nbsp;
                    <p>({data.rating})</p>
                  </Typography>
                  {data.price && (
                    <Typography
                      variant="body2"
                      className="materi-page-card-content-price"
                    >
                      {data.price}
                    </Typography>
                  )}
                  {data.info === "Terlaris" && (
                    <Typography
                      variant="body2"
                      className="materi-page-card-content-info"
                    >
                      <span className="terlaris">{data.info}</span>
                    </Typography>
                  )}
                  {data.info === "Free" && (
                    <Typography
                      variant="body2"
                      className="materi-page-card-content-info"
                    >
                      <span className="free">{data.info}</span>
                    </Typography>
                  )}
                  {data.info === "Terpopuler & Baru" && (
                    <Typography
                      variant="body2"
                      className="materi-page-card-content-info"
                    >
                      <span className="terpopuler-dan-baru">{data.info}</span>
                    </Typography>
                  )}
                </CardContent>
              </Grid>
            </Grid>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default Data;
