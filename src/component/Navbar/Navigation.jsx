import { Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./Nav.css";

export default function Navigation({ color, children }) {
  return (
    <IconButton className="nav-title-btn">
      <ArrowBackIosNewIcon sx={{ color }} />
      &nbsp;
      <Typography variant="h6" className="nav-title-btn-txt" sx={{ color }}>
        {children}
      </Typography>
    </IconButton>
  );
}
