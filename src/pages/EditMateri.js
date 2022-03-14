import * as React from "react";
import "tinymce/tinymce";
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
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { useParams } from "react-router-dom";

import { filter } from "../Data/dataFilter";
import lotsOfData from "../component/ListMateri/dataList";
import Navbar from "../component/Navbar/Navbar";
import Colors from "../Theme/Colors";

export default function EditMateri() {
  const TinyMceEditor = () => {
    const [contentEditor, setContentEditor] = React.useState();
    const handleEditorChange = (content, editor) => {
      console.log("Content was updated:", content);
      setContentEditor(content);
    };

    return (
      <Editor
        init={{
          skin: false,
          content_css: false,
          height: 150,
          menubar: false,
          plugins: ["link image", "table paste"],
          toolbar:
            "bold italic | alignleft aligncenter alignright | blockquote link image",
        }}
        value={detail.deskripsi}
        onEditorChange={handleEditorChange}
      />
    );
  };

  const param = useParams();

  const [tingkatan, setTingkatan] = React.useState("");
  const [kategori, setKategori] = React.useState("");
  const [usia, setUsia] = React.useState("");
  const [detail, setDetail] = React.useState([]);

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
    const detailData = lotsOfData.find((data) => data.id == param.id);
    setDetail(detailData);
  }, []);

  console.log(detail);

  return (
    <>
      <Navbar
        bgcolor={Colors.cadetBlue}
        color={Colors.white}
        mb={2}
        // path={`/detail`}
        path={`/detail/${detail.id}`}
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
                value={detail.title}
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
              <TinyMceEditor />
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
