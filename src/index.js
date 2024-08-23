import ReactDOM from "react-dom/client";

import App from "./App";
// import { GlobalStyle } from "./styles/GlobalStyle";
// import { ThemeProvider } from "styled-components";
// import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <BrowserRouter basename="/fullsdev">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter> */}

    <BrowserRouter basename="/engl">
      <App />
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
