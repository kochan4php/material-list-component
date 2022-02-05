import { Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Nav.css";

export default function Navigation({ color, children }) {
  return (
    <IconButton className="nav-title-btn">
      <ArrowBackIcon sx={{ color }} />
      &nbsp;
      <Typography variant="h6" className="nav-title-btn-txt" sx={{ color }}>
        {children}
      </Typography>
    </IconButton>
  );
}
