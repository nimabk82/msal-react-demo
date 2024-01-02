import { ProfileData } from "../components/ProfileData";
import { useMsalAuthentication } from "@azure/msal-react";
import { InteractionType, BrowserAuthError } from "@azure/msal-browser";
import { useState, useEffect } from "react";
import { fetchData } from "../fetch";

export const Logout = () => {
  return <div>Log out</div>;
};
