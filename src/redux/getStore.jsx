import { applyMiddleware } from "redux";
import {configureStore} from "@reduxjs/toolkit"
import thunk from "redux-thunk";
import cardReducer from "./reducers/cardReducer";
import newArrivalsReducer from "./reducers/newArrivalsReducer"
import pageReducer from "./reducers/pageReducer"

const store=configureStore({
  reducer:{cards:cardReducer,newArrivals:newArrivalsReducer,pageCards:pageReducer},
  middleware:[thunk]
});
// const store=createStore(reducers, {}, applyMiddleware(thunk));

export default store