import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PageLayout } from "./components/PageLayout";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { MsalProvider, useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import Grid from "@mui/material/Grid";
import { Logout } from "./pages/Logout";

function App({ msalInstance }) {
  return (
    <MsalProvider instance={msalInstance}>
      <PageLayout>
        <Grid container justifyContent="center">
          <Pages />
        </Grid>
      </PageLayout>
    </MsalProvider>
  );
}

const Pages = () => {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  console.log(accounts, "accounts");
  useEffect(() => {
    if (!isAuthenticated && accounts.length > 0) {
      // Attempt SSO silently
      instance
        .ssoSilent({
          scopes: ["user.read"],
          loginHint: accounts[0].username, // Provide a hint for the user's account
        })
        .then((response) => {
          instance.setActiveAccount(response.account);
        })
        .catch((error) => {
          if (error instanceof InteractionRequiredAuthError) {
            // Fallback to interactive sign-in if silent SSO fails
            instance.loginRedirect({
              scopes: ["user.read"],
            });
          } else {
            console.error("SSO Silent Error:", error);
          }
        });
    }
  }, [instance, isAuthenticated, accounts]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default App;
