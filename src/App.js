import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const { loading, error, userInfo } = useSelector((state) => state.user);
  return (
    <div className="App">
      <h2>
        Creating a Login and Register Page <br /> Redux async calls - Redux
        Thunk{" "}
      </h2>
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
