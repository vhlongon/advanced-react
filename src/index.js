import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <App title="Advanced React" />,
  document.getElementById("root")
);
registerServiceWorker();
