import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle"

ReactDOM.render(
  <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
    <theme />
  </Provider>
  </ThemeProvider>
  </>,

  document.getElementById("root")
);
