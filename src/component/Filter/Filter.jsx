import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Colors from "../../Theme/Colors";
import ButtonFilter from "./ButtonFilter";
import { Container, Grid } from "@mui/material";
import "./Filter.css";

const Filter = ({ onClose }) => {
  React.useEffect(() => {
    document.body.classList.add("filter");
    return function () {
      document.body.classList.remove("filter");
    };
  }, []);

  return (
    <>
      {/* props path in navbar component is required!!! */}
      <Navbar bgcolor={Colors.cadetBlue} color={Colors.white} path="/">
        Filter
      </Navbar>
      <Container className="filter-page">
        <Grid container spacing={2} mt={1}>
          <ButtonFilter />
        </Grid>
      </Container>
    </>
  );
};

export default Filter;
