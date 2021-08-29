import React, { useEffect } from "react";
//import { connect } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Home = ({ history }) => {
  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  });

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home;
