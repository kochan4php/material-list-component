import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LinkIcon from "@mui/icons-material/Link";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { filter } from "../Data/dataFilter";
import Navbar from "../component/Navbar/Navbar";
import Colors from "../Theme/Colors";

const toggleBtn = [
  { icon: <FormatBoldIcon />, value: "bold" },
  { icon: <FormatItalicIcon />, value: "italic" },
  { icon: <FormatAlignLeftIcon />, value: "left aligned" },
  { icon: <FormatAlignCenterIcon />, value: "centered" },
  { icon: <FormatAlignRightIcon />, value: "right aligned" },
  { icon: <FormatQuoteIcon />, value: "quote" },
  { icon: <LinkIcon />, value: "link" },
  { icon: <ImageOutlinedIcon />, value: "image" },
];

export default function EditMateri() {
  // const param = useParams();

  const [tingkatan, setTingkatan] = React.useState("");
  const [kategori, setKategori] = React.useState("");
  const [usia, setUsia] = React.useState("");
  const [detail, setDetail] = React.useState([]);
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleTingkatan = (event) => {
    setTingkatan(event.target.value);
    console.log(event.target.value);
  };

  const handleKategori = (event) => {
    setKategori(event.target.value);
    console.log(event.target.value);
  };

  const handleUsia = (event) => {
    setUsia(event.target.value);
    console.log(event.target.value);
  };

  React.useEffect(() => {
    // const detailData = lotsOfData.find((data) => data.id == param.id);
    // setDetail(detailData);
  }, []);

  console.log(detail);

  return (
    <>
      <Navbar
        bgcolor={Colors.cadetBlue}
        color={Colors.white}
        mb={2}
        path={`/detail`}
        // path={`/detail/${detail.id}`}
      >
        Edit Materi
      </Navbar>
      <Container>
        <form action="" method="post">
          <Grid container>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Judul Materi"
                fullWidth
                value={"Zuki (Pukulan)"}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <FormControl fullWidth>
                <Select
                  value={tingkatan}
                  onChange={handleTingkatan}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">Tingkatan</MenuItem>
                  {filter.tingkatanSabuk.map((ts, index) => (
                    <MenuItem key={index} value={ts}>
                      {ts}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <FormControl fullWidth>
                <Select
                  value={kategori}
                  onChange={handleKategori}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">Kategori</MenuItem>
                  {filter.kategori.map((k, index) => (
                    <MenuItem key={index} value={k}>
                      {k}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <FormControl fullWidth>
                <Select
                  value={usia}
                  onChange={handleUsia}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">Usia</MenuItem>
                  {filter.usia.map((u, index) => (
                    <MenuItem key={index} value={u}>
                      {u}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                size="small"
                fullWidth
              >
                {toggleBtn.map((item, index) => (
                  <ToggleButton
                    key={index}
                    value={item.value}
                    aria-label={item.value}
                  >
                    {item.icon}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={2}
                placeholder="Deskripsi"
                value={
                  "Dalam karate, tsuki atau zuki adalah istilah yang digunakan untuk pukulan. Pukulan jenis ini biasanya dilakukan menggunakan 2 ruas jari depan, yang disebut dengan seiken (tinju depan)."
                }
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  outline: "none",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                  borderColor: "rgba(0,0,0,0.3)",
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Judul Materi"
                fullWidth
                type="file"
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Typography variant="h6">Harga</Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="gratis"
                    control={<Radio />}
                    label="Gratis"
                    checked
                  />
                  <FormControlLabel
                    value="berbayar"
                    control={<Radio />}
                    label="Berbayar"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Harga"
                value={"299.000,00"}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: Colors.tangerine,
                  color: Colors.white,
                  textTransform: "capitalize",
                  "&:hover": {
                    bgcolor: Colors.tangerine,
                    color: Colors.white,
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
  // return (
  //   <>
  //     <Navbar
  //       bgcolor={Colors.cadetBlue}
  //       color={Colors.white}
  //       mb={2}
  //       path={`/detail/${detail.id}`}
  //     >
  //       Edit Materi
  //     </Navbar>
  //     <Container>
  //       <form action="" method="post">
  //         <Grid container>
  //           <Grid item xs={12} sx={{ mb: 2 }}>
  //             <TextField
  //               variant="outlined"
  //               placeholder="Judul Materi"
  //               fullWidth
  //               value={detail.title}
  //             />
  //           </Grid>
  //           <Grid item xs={12} sx={{ mb: 2 }}>
  //             <FormControl fullWidth>
  //               <Select
  //                 value={tingkatan}
  //                 placeholder={"Tingkatan"}
  //                 onChange={handleTingkatan}
  //                 displayEmpty
  //                 inputProps={{ "aria-label": "Without label" }}
  //               >
  //                 <MenuItem value="">Tingkatan</MenuItem>
  //                 {filter.tingkatanSabuk.map((ts, index) => (
  //                   <MenuItem key={index} value={ts}>
  //                     {ts}
  //                   </MenuItem>
  //                 ))}
  //               </Select>
  //             </FormControl>
  //           </Grid>
  //           <Grid item xs={12} sx={{ mb: 2 }}>
  //             <FormControl fullWidth>
  //               <Select
  //                 value={kategori}
  //                 onChange={handleKategori}
  //                 displayEmpty
  //                 inputProps={{ "aria-label": "Without label" }}
  //               >
  //                 <MenuItem value="">Kategori</MenuItem>
  //                 {filter.kategori.map((k, index) => (
  //                   <MenuItem key={index} value={k}>
  //                     {k}
  //                   </MenuItem>
  //                 ))}
  //               </Select>
  //             </FormControl>
  //           </Grid>
  //           <Grid item xs={12} sx={{ mb: 2 }}>
  //             <FormControl fullWidth>
  //               <Select
  //                 value={usia}
  //                 onChange={handleUsia}
  //                 displayEmpty
  //                 inputProps={{ "aria-label": "Without label" }}
  //               >
  //                 <MenuItem value="">Usia</MenuItem>
  //                 {filter.usia.map((u, index) => (
  //                   <MenuItem key={index} value={u}>
  //                     {u}
  //                   </MenuItem>
  //                 ))}
  //               </Select>
  //             </FormControl>
  //           </Grid>
  //           <Grid item xs={12} sx={{ mb: 2 }}>
  //             <TextareaAutosize
  //               aria-label="minimum height"
  //               minRows={2}
  //               placeholder="Deskripsi"
  //               value={detail.deskripsi}
  //               style={{
  //                 width: "100%",
  //                 padding: "10px",
  //                 borderRadius: "5px",
  //                 outline: "none",
  //                 fontSize: "1rem",
  //                 boxSizing: "border-box",
  //                 borderColor: "rgba(0,0,0,0.3)",
  //               }}
  //             />
  //           </Grid>
  //           <Grid item xs={12} sx={{ mb: 2 }}>
  //             <TextField
  //               variant="outlined"
  //               placeholder="Judul Materi"
  //               fullWidth
  //               type="file"
  //             />
  //           </Grid>
  //           <Grid item xs={12} sx={{ mb: 2 }}>
  //             <Typography variant="h6">Harga</Typography>
  //             <FormControl>
  //               <RadioGroup
  //                 aria-labelledby="demo-radio-buttons-group-label"
  //                 defaultValue="female"
  //                 name="radio-buttons-group"
  //               >
  //                 {detail.kategori == "Gratis" ? (
  //                   <>
  //                     <FormControlLabel
  //                       value="gratis"
  //                       control={<Radio />}
  //                       label="Gratis"
  //                       checked
  //                     />
  //                     <FormControlLabel
  //                       value="berbayar"
  //                       control={<Radio />}
  //                       label="Berbayar"
  //                     />
  //                   </>
  //                 ) : (
  //                   <>
  //                     <FormControlLabel
  //                       value="gratis"
  //                       control={<Radio />}
  //                       label="Gratis"
  //                     />
  //                     <FormControlLabel
  //                       value="berbayar"
  //                       control={<Radio />}
  //                       label="Berbayar"
  //                       checked
  //                     />
  //                   </>
  //                 )}
  //               </RadioGroup>
  //             </FormControl>
  //           </Grid>
  //           <Grid item xs={12} sx={{ mb: 2 }}>
  //             <TextField
  //               variant="outlined"
  //               placeholder="Harga"
  //               value={detail.price}
  //               fullWidth
  //             />
  //           </Grid>
  //           <Grid item xs={12} sx={{ mb: 2 }}>
  //             <Button
  //               variant="contained"
  //               fullWidth
  //               sx={{
  //                 bgcolor: Colors.tangerine,
  //                 color: Colors.white,
  //                 textTransform: "capitalize",
  //                 "&:hover": {
  //                   bgcolor: Colors.tangerine,
  //                   color: Colors.white,
  //                 },
  //               }}
  //             >
  //               Submit
  //             </Button>
  //           </Grid>
  //         </Grid>
  //       </form>
  //     </Container>
  //   </>
  // );
}
