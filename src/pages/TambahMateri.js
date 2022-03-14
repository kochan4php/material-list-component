import * as React from "react";
import tinymce from "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/plugins/paste";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/table";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/content/default/content.min.css";
import { Editor } from "@tinymce/tinymce-react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useHistory } from "react-router-dom";
import { filter } from "../Data/dataFilter";
import Navbar from "../component/Navbar/Navbar";
import Colors from "../Theme/Colors";

import lotsOfData from "../component/ListMateri/dataList";

export default function TambahMateri() {
  const [tingkatan, setTingkatan] = React.useState("");
  const [kategori, setKategori] = React.useState("");
  const [usia, setUsia] = React.useState("");
  const [contentEditor, setContentEditor] = React.useState();
  const [judul, setJudul] = React.useState("");
  const [radioValue, setRadioValue] = React.useState("");
  const [harga, setHarga] = React.useState(0);

  const history = useHistory();
  const result = [];
  const final = [];

  const handleJudul = (e) => {
    setJudul(e.target.value);
  };

  const handleTingkatan = (event) => {
    setTingkatan(event.target.value);
  };

  const handleKategori = (event) => {
    setKategori(event.target.value);
  };

  const handleUsia = (event) => {
    setUsia(event.target.value);
  };

  const handleRadioButton = (e) => {
    if (e.target.value === "gratis") {
      setRadioValue("gratis");
    } else if (e.target.value === "berbayar") {
      setRadioValue("berbayar");
    } else {
      setRadioValue("");
    }
  };

  const handleHarga = (e) => {
    setHarga(e.target.value);
  };

  const handleImage = (e) => {
    console.dir(e.target);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    result.push(tingkatan, kategori, usia);
    final.push({
      title: judul,
      filter: result,
      deskripsi: contentEditor,
      harga: radioValue,
      price: harga,
    });
    lotsOfData.push(...final);
    console.log("isi data list : ", lotsOfData);
    history.push("/");
  };

  const handleEditorChange = (content, editor) => {
    setContentEditor(content);
  };

  return (
    <>
      <Navbar bgcolor={Colors.cadetBlue} color={Colors.white} mb={2} path="/">
        Tambah Materi
      </Navbar>
      <Container>
        <form action="" method="post" onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Judul Materi"
                fullWidth
                onChange={handleJudul}
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
              <Editor
                init={{
                  skin: false,
                  content_css: false,
                  height: 150,
                  menubar: false,
                  plugins: ["link image", "table paste"],
                  toolbar:
                    "bold | italic | alignleft | aligncenter | alignright | blockquote | link | image",
                  image_title: true,
                  automatic_uploads: true,
                  file_picker_types: "image",
                  file_picker_callback: function (cb, value, meta) {
                    var input = document.createElement("input");
                    input.setAttribute("type", "file");
                    input.setAttribute("accept", "image/*");
                    input.onchange = function () {
                      var file = this.files[0];

                      var reader = new FileReader();
                      reader.onload = function () {
                        var id = "blobid" + new Date().getTime();
                        var blobCache =
                          tinymce.activeEditor.editorUpload.blobCache;
                        var base64 = reader.result.split(",")[1];
                        var blobInfo = blobCache.create(id, file, base64);
                        blobCache.add(blobInfo);

                        cb(blobInfo.blobUri(), { title: file.name });
                      };
                      reader.readAsDataURL(file);
                    };

                    input.click();
                  },
                }}
                value={contentEditor}
                onEditorChange={handleEditorChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Judul Materi"
                fullWidth
                type="file"
                onChange={handleImage}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Typography variant="h6">Harga</Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={handleRadioButton}
                >
                  <FormControlLabel
                    value="gratis"
                    control={<Radio />}
                    label="Gratis"
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
                fullWidth
                onChange={handleHarga}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <button
                style={{
                  backgroundColor: Colors.tangerine,
                  width: "100%",
                  padding: "10px 0",
                  border: "none",
                  color: Colors.white,
                  borderRadius: "5px",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                Submit
              </button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
