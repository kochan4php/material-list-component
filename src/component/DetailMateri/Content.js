import * as React from "react";
import ReactJS from "../../Assets/img/react.png";
import {
  Grid,
  Typography,
  CardContent,
  CardMedia,
  Rating,
  Button,
} from "@mui/material";
import "./Detail.css";

const Content = (props) => {
  return (
    <>
      {props.img && (
        <Grid item xs={4} sx={{ pb: 1 }}>
          <CardMedia
            component="img"
            image={props.img}
            alt={props.title}
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
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            fontSize="13px"
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
              value={props.rate}
              readOnly
              className="detail-page-card-content-rating-value"
            />
          </Typography>
          <Typography
            variant="body2"
            fontSize="14px"
            sx={{ mb: 0.5 }}
            className="detail-page-card-content-sale"
          >
            171 Terjual
          </Typography>
          {props.price && (
            <Typography
              variant="body"
              fontWeight={600}
              fontSize="17px"
              className="detail-page-card-content-price"
            >
              Rp {props.price}
            </Typography>
          )}
        </CardContent>
      </Grid>
    </>
  );
};

export default Content;
