import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";
import App from "./App";
import { SearchContextProvider } from "./context/SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider>
      <BrowserRouter>

        <App />
      </BrowserRouter>
    </SearchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
