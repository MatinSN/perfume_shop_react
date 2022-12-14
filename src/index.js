import React from "react"
import ReactDOM from "react-dom"
import './fonts/B-Nazanin.ttf'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App"
import "./index.css"
import "./fonts/Vazir-Bold.ttf"
import { Provider } from "react-redux";
import store from "./redux/getStore"


ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
