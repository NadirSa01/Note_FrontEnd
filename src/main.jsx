import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Store from "./Store/Store.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Store from "./Store/Store.jsx";
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <Provider store={Store}>
//       <App />
//     </Provider>

// );
