import Navbar from "../Navbar/Navbar";
import Colors from "../../Theme/Colors";
// import "./Filter.css";

const Filter = () => {
  return (
    <>
      {/* props path in navbar component is required!!! */}
      <Navbar bgcolor={Colors.cadetBlue} color={Colors.white} path="/">
        Filter
      </Navbar>
    </>
  );
};

export default Filter;
