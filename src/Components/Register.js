import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

//REDUX hooks
import { useDispatch, useSelector } from "react-redux";
//Import our actions
import { register } from "../redux/actions/userActions";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // we have to initialize it when using useDispatch
  // will be saying the object which comes through useDispatch(),
  // we use useDispatch() on each react component, here we are saying that we want
  // to dispatch on Register component
  const dispatch = useDispatch();

  // const user = useSelector((state) => state.user);
  // console.log("USER", user);
  const { loading, error, userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password does not match");
      setTimeout(() => setMessage(""), 3000); // display for 3sec
    } else {
      // dispatch takes actions, in this case its takes register action
      dispatch(register(email, password));
    }
  };

  return (
    <div>
      <h1>Register with us</h1>
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
            placeholder="Please enter your PW"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Confirm Password</label>
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm your  PW"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>

      <Link to="/login">
        <p>Already register click here to login</p>
      </Link>

      <div>{loading && <Loader />}</div>
      <div>{message && <p>{message}</p>}</div>
      <div>{error && <p>{error.message}</p>}</div>
    </div>
  );
};

export default Register;
