import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import theme from "./styles/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
    <theme />
  </Provider>
  </ThemeProvider>,

  document.getElementById("root")
);
