import { Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

export default function Navigation({ color, children }) {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <IconButton className="materi-page-title-btn">
        <ArrowBackIosNewIcon sx={{ color }} />
        &nbsp;
        <Typography
          variant="h6"
          className="materi-page-title-btn-txt"
          sx={{ color }}
        >
          {children}
        </Typography>
      </IconButton>
    </Link>
  );
}
