import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faChevronLeft,
  faTrashAlt,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";
// import "typeface-roboto";
import "./index.css";
import App from "./App";

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
