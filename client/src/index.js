import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";
import App from "./App";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </SearchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
