import { Routes, Route, useNavigate } from "react-router-dom";
// Material-UI imports
import Grid from "@mui/material/Grid";

// MSAL imports
import { MsalProvider, useIsAuthenticated } from "@azure/msal-react";
import { CustomNavigationClient } from "./utils/NavigationClient";

// Sample app imports
import { PageLayout } from "./ui-components/PageLayout";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Logout } from "./pages/Logout";

// Class-based equivalents of "Profile" component
import { ProfileWithMsal } from "./pages/ProfileWithMsal";
import { ProfileRawContext } from "./pages/ProfileRawContext";
import { ProfileUseMsalAuthenticationHook } from "./pages/ProfileUseMsalAuthenticationHook";
import React from "react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

function App({ pca }) {
  // The next 3 lines are optional. This is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);
  const isAuthenticated = useIsAuthenticated();

  React.useEffect(() => {
    console.log("accounts2");

    // if (!isAuthenticated && accounts.length > 0) {
    if (!isAuthenticated) {
      console.log("accounts3");

      // Attempt SSO silently
      pca
        .ssoSilent({
          scopes: ["user.read"],
          // loginHint: accounts[0].username, // Provide a hint for the user's account
        })
        .then((response) => {
          console.log("accounts4", response);

          pca.setActiveAccount(response.account);
        })
        .catch((error) => {
          console.log("accounts5", error);

          if (error instanceof InteractionRequiredAuthError) {
            console.log("accounts6", error);

            // Fallback to interactive sign-in if silent SSO fails
            pca.loginRedirect({
              scopes: ["user.read"],
            });
          } else {
            console.log("accounts7", error);
            console.error("SSO Silent Error:", error);
          }
        });
    }
  }, [pca, isAuthenticated]);

  return (
    <MsalProvider instance={pca}>
      <PageLayout>
        <Grid container justifyContent="center">
          <Pages />
        </Grid>
      </PageLayout>
    </MsalProvider>
  );
}

function Pages() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/profileWithMsal" element={<ProfileWithMsal />} />
      <Route path="/profileRawContext" element={<ProfileRawContext />} />
      <Route
        path="/profileUseMsalAuthenticationHook"
        element={<ProfileUseMsalAuthenticationHook />}
      />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
