import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//  Reducers
import { userReducer } from "./reducers/userReducers";
const reducers = combineReducers({
  // Add reducers
  user: userReducer,
  // if we need to add more reducer then we do as below:
  // cart: cartReducer,
  // product: productReducer,
});

//Get info from local storage, the below code is only is you want to store your data in localStorage then you need.
//===============================================================================================================
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  user: {
    userInfo: userInfoFromStorage,
  },
};

//=================================================================================================================

//MiddleWare variable, function that does something between
const middleWare = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
