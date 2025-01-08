import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MsalProvider } from "@azure/msal-react";
import {
  EventType,
  LogLevel,
  PublicClientApplication,
} from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "a777c7c4-09f2-4cf9-9605-96b82323b611",
    authority:
      "https://login.microsoftonline.com/bf475492-067f-4d6e-989f-776b97a19cd9",
    redirectUri: "http://localhost:3002",
  },
  cache: {
    cacheLocation: "sessionStorage", // Store tokens in session storage
    storeAuthStateInCookie: false,
  },
  system: {
    allowRedirectInIframe: true,
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message, "loggerCallback Error");
            return;
          case LogLevel.Info:
            console.info(message, "loggerCallback Info");
            return;
          case LogLevel.Verbose:
            console.debug(message, "loggerCallback Verbose");
            return;
          case LogLevel.Warning:
            console.warn(message, "loggerCallback Warning");
            return;
          default:
            return;
        }
      },
    },
  },
};

export const scopes = ["openid", "profile", "email", "user.read"];

export const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </MsalProvider>
  </React.StrictMode>
);
