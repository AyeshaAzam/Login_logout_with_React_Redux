import axios from "axios";

// dispatch is a function to call an action....
// REGISTER USER ACTION
export const register = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_REGISTER_REQUEST",
    });

    // API request , Http
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://reqres.in/api/register",
      { email, password },
      config
    );
    // console.log("data", data)

    dispatch({
      type: "USER_REGISTER_SUCCESS",
      payload: { id: data.id, email: email, token: data.token },
    });
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload: error,
    });

    // So what we are doing here is it dispatches the USER_REGISTER ERROR with the error message and then we create another dispatch with the time out
    // that clears the error in the reducer that way it will stop showing the error
    setTimeout(() => {
      dispatch({
        type: "USER_CLEAR_ERROR",
      });
    }, 3000);
  }
};

// LOGIN USER ACTION
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });

    // API request , Http
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://reqres.in/api/login",
      { email, password },
      config
    );
    // console.log("data", data)

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: { email: email, token: data.token },
    });

    localStorage.setItem(
      "userInfo",
      JSON.stringify({ email, token: data.token })
    );
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error,
    });
    // So what we are doing here is it dispatches the USER_REGISTER ERROR with the error message and then we create another dispatch with the time out
    // that clears the error in the reducer that way it will stop showing the error
    setTimeout(() => {
      dispatch({
        type: "USER_CLEAR_ERROR",
      });
    }, 3000);
  }
};

// For Logout
export const logout = () => (display) => {
  //Cleaning localStorage
  localStorage.removeItem("userInfo");

  // Dispatching the USER_LOGOUT
  display({
    type: "USER_LOGOUT",
  });
};
