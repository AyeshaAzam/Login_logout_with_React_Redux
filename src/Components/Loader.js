import Spinner from "react-spinkit";

const Loader = () => {
  return (
    <div style={{ width: 150, height: 150, marginLeft: 370, marginTop: 100 }}>
      <Spinner name="pacman" color="orange" />
    </div>
  );
};

export default Loader;
