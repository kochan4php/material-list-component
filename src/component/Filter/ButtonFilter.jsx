import * as React from "react";
import Colors from "../../Theme/Colors";
import { Button, Typography, Grid } from "@mui/material";
import "./Button.css";

const tingkatanSabuk = ["Putih", "Kuning", "Hijau", "Cokelat", "MSH"];
const kategori = [
  "Kata",
  "Kumite",
  "Disabilitas",
  "Self Defense",
  "Implementasi",
  "Filosofi & Sejarah",
];
const usia = ["6-14 Tahun", "15-18 Tahun"];
const harga = ["Gratis", "Berbayar"];
const jenisFile = ["PDF", "Teks", "Video"];

const styleBTN = {
  marginRight: "8px",
  marginBottom: "8px",
  borderRadius: "4px",
  textTransform: "capitalize",
  backgroundColor: "#fff",
  borderColor: Colors.tangerine,
  color: Colors.tangerine,

  "&:hover": { borderColor: "#f78104" },
  "&:checked": { backgroundColor: "#f78104", color: "#fff" },
};

const handleClick = (e) => {
  e.target.classList.toggle("clicked");
};

const ButtonFilter = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6" className="filter-page-title">
          Tingkatan Sabuk
        </Typography>
        {tingkatanSabuk.map((ts, index) => (
          <Button
            variant="outlined"
            sx={styleBTN}
            id="btn"
            key={index}
            value={ts}
            onClick={handleClick}
          >
            {ts}
          </Button>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className="filter-page-title">
          Kategori
        </Typography>
        {kategori.map((k, index) => (
          <Button
            variant="outlined"
            sx={styleBTN}
            id="btn"
            key={index}
            value={k}
            onClick={handleClick}
          >
            {k}
          </Button>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className="filter-page-title">
          Usia
        </Typography>
        {usia.map((u, index) => (
          <Button
            variant="outlined"
            sx={styleBTN}
            id="btn"
            key={index}
            value={u}
            onClick={handleClick}
          >
            {u}
          </Button>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className="filter-page-title">
          Harga
        </Typography>
        {harga.map((h, index) => (
          <Button
            variant="outlined"
            sx={styleBTN}
            id="btn"
            key={index}
            value={h}
            onClick={handleClick}
          >
            {h}
          </Button>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className="filter-page-title">
          Jenis File
        </Typography>
        {jenisFile.map((jf, index) => (
          <Button
            variant="outlined"
            sx={styleBTN}
            id="btn"
            key={index}
            value={jf}
            onClick={handleClick}
          >
            {jf}
          </Button>
        ))}
      </Grid>
    </>
  );
};

export default ButtonFilter;
