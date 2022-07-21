import React from "react";
import ReactDOM from "react-dom";
import HttpsRedirect from 'react-https-redirect';
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTopButton from "./ScrollToTopButton";
import { store } from "./store/store";
import { Provider } from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     {/*<HttpsRedirect>  */}
       
      <App />
     {/*</HttpsRedirect> */}
      
      <ScrollToTopButton />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
