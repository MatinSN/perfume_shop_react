import { applyMiddleware } from "redux";
import {configureStore} from "@reduxjs/toolkit"
import thunk from "redux-thunk";
import cardReducer from "./reducers/cardReducer";
import newArrivalsReducer from "./reducers/newArrivalsReducer"
import pageReducer from "./reducers/pageReducer"
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import brandReducer from "./reducers/brandReducer";
import searchReducer from "./reducers/searchReducer";
import perfumeDetailReducer from "./reducers/perfumeDetailReducer";
import commentReducer from "./reducers/commentReducer";

const store=configureStore({
  reducer:{
    cards:cardReducer,
    newArrivals:newArrivalsReducer,
    pageCards:pageReducer,
    user:userReducer,
    cart:cartReducer,
    brands:brandReducer,
    searchCards : searchReducer,
    perfumes:perfumeDetailReducer,
    comments:commentReducer
  },
  middleware:[thunk]
});
// const store=createStore(reducers, {}, applyMiddleware(thunk));

export default store