import * as React from "react";
import { Typography, Button } from "@mui/material";
import Colors from "../../Theme/Colors";
import "./Detail.css";

const Description = (props) => {
  const [expand, setExpand] = React.useState(false);
  const [collapse, setCollapse] = React.useState(false);

  return (
    <>
      <Typography varian="h6" mb={1} fontWeight="bold">
        Deskripsi
      </Typography>
      <Typography variant="body2" mb={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius
        quidem provident quaerat expedita aliquid, culpa repellendus,
        exercitationem accusamus eveniet totam itaque inventore saepe ut
        similique veritatis illo magni nulla.
      </Typography>
      {(!expand || collapse) && (
        <Button
          variant="text"
          mb={1}
          sx={{
            p: 0,
            textTransform: "capitalize",
            color: Colors.tangerine,
          }}
          onClick={() => {
            setExpand(true);
            setCollapse(false);
          }}
        >
          Show More
        </Button>
      )}
      {expand && (
        <>
          <Typography variant="body2" mb={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            eius quidem provident quaerat expedita aliquid, culpa repellendus,
            exercitationem accusamus eveniet totam itaque inventore saepe ut
            similique veritatis illo magni nulla.
          </Typography>
          <Button
            variant="text"
            sx={{
              p: 0,
              minWidth: 0,
              textTransform: "capitalize",
              color: Colors.tangerine,
            }}
            onClick={() => {
              setCollapse(true);
              setExpand(false);
            }}
          >
            Hide
          </Button>
        </>
      )}
    </>
  );
};

export default Description;
