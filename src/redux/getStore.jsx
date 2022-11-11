import { applyMiddleware } from "redux";
import {configureStore} from "@reduxjs/toolkit"
import thunk from "redux-thunk";
import cardReducer from "./reducers/cardReducer";
import newArrivalsReducer from "./reducers/newArrivalsReducer"

const store=configureStore({
  reducer:{cards:cardReducer,newArrivals:newArrivalsReducer},
  middleware:[thunk]
});
// const store=createStore(reducers, {}, applyMiddleware(thunk));

export default store