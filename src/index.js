import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import {
  PublicClientApplication,
  EventType,
  LogLevel,
} from "@azure/msal-browser";

const pca = new PublicClientApplication({
  auth: {
    clientId: "d5a97498-a9f0-4007-9f4a-d16592145e79",
    authority:
      "https://login.microsoftonline.com/bf475492-067f-4d6e-989f-776b97a19cd9",
    redirectUri: "/",
    postLogoutRedirectUri: "/logout",
    clientCapabilities: ["CP1"],
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
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
});

pca.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    pca.setActiveAccount(event.payload.account);
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App msalInstance={pca} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
