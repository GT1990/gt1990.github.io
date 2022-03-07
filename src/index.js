import React from "react";
import ReactDOM from "react-dom";
import PortfolioContext from "./Context";
// css
import "./css/normalize.css";
import "./css/reset.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <PortfolioContext>
    <App />
  </PortfolioContext>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
