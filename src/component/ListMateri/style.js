import Colors from "../../Theme/Colors";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100vh",
  bgcolor: "background.paper",
};

export const styleBtn = {
  marginRight: "8px",
  marginBottom: "8px",
  borderRadius: "4px",
  textTransform: "capitalize",
  backgroundColor: "#fff",
  borderColor: Colors.tangerine,
  color: Colors.tangerine,

  "&:hover": { borderColor: "#f78104" },
};

export const appbarStyle = {
  padding: "0.5em 0",
  bgcolor: Colors.cadetBlue,
  mb: 1,
  boxShadow: 0,
};

export const iconButtonStyle = {
  borderRadius: "0",
  padding: 0,
  paddingRight: "10px",
  textDecoration: "none",
};

export const navTitleStyle = {
  textDecoration: "none",
  fontSize: "0.9em",
  color: Colors.white,
};
