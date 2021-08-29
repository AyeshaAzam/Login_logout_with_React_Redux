import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
//REDUX hooks
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userActions";
import Loader from "./Loader";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("What is in the history", history);

  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.user);
  //console.log("User in login ", user);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <h1>Sign in</h1>
      <form type="submit" onSubmit={submitHandler}>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            type="email"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            placeholder="Please enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <Link to="/register">
        <p>Not yet register? Click here to registered</p>
      </Link>

      <div>{loading && <Loader />}</div>
      <div>{error && <p>{error.message}</p>}</div>
    </div>
  );
};

export default Login;
