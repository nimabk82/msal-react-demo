import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageLayout } from "./components/PageLayout";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import Grid from "@mui/material/Grid";
import { Logout } from "./pages/Logout";
import { ClientDetails } from "./components/ClientDetails";
import jwtDecode from "jwt-decode";
import { msalConfig, msalInstance, scopes } from ".";

function App() {
  return (
    <PageLayout>
      <Grid container justifyContent="center">
        <Pages />
      </Grid>
    </PageLayout>
  );
}

const Pages = () => {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get("accessToken");
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      try {
        const acc = {
          homeAccountId: `${decodedToken.tid}.${decodedToken.oid}`,
          environment: "login.microsoftonline.com",
          tenantId: decodedToken.tid,
          // username: decodedToken.preferred_username,
          localAccountId: decodedToken.oid,
        };
        const a = instance.getAccountByHomeId(
          `${decodedToken.tid}.${decodedToken.oid}`
        );
        instance.setActiveAccount(acc);

        console.log(acc);
        // alert(JSON.stringify(msalInstance));
        window.history.replaceState({}, document.title, "/");
      } catch (error) {
        alert(JSON.stringify(error));
      }
      // alert(JSON.stringify(msalInstance));
      // msalInstance.setActiveAccount(msalInstance);
      // Save the token in a secure place (e.g., memory or a state manager)
    }
  }, [location]);

  // const validateAndLogin = async (token) => {
  //   try {
  //     // Send the token to your backend for validation
  //     const response = await fetch("/api/auth/silent-login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ accessToken: token }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("User logged in:", data);

  //       // Navigate to the dashboard or home page
  //       navigate("/dashboard");
  //     } else {
  //       console.error("Token validation failed:", await response.json());
  //     }
  //   } catch (error) {
  //     console.error("Error during silent login:", error);
  //   }
  // };

  // console.log(accounts, instance, "accounts1");
  // useEffect(() => {
  //   // const acc = msalInstance.getActiveAccount();
  //   // alert(JSON.stringify(acc));

  //   console.log("accounts2", instance.getAllAccounts());

  //   // if (!isAuthenticated && accounts.length > 0) {
  //   if (!isAuthenticated) {
  //     // Attempt SSO silently
  //     instance
  //       .ssoSilent({
  //         scopes,
  //         // loginHint: accounts[0]?.username, // Provide a hint for the user's account
  //       })
  //       .then((response) => {
  //         console.log("accounts4", JSON.stringify(response.account));

  //         instance.setActiveAccount(response.account);
  //       })
  //       .catch((error) => {
  //         console.log("accounts5", error);

  //         // if (error instanceof InteractionRequiredAuthError) {
  //         //   console.log("accounts6", error);

  //         //   // Fallback to interactive sign-in if silent SSO fails
  //         //   instance.loginRedirect({
  //         //     scopes: scopes,
  //         //   });
  //         // } else {
  //         //   console.log("accounts7", error);
  //         //   console.error("SSO Silent Error:", error);
  //         // }
  //       });
  //   }
  // }, [instance, isAuthenticated, accounts]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/profile" element={<Profile />} />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/clientDetails/isDeeplinking/:isDeeplinking/clientId/:clientId/dob/:dob/firstName/:firstName/lastName/:lastName"
        element={<ClientDetails />}
      /> */}
    </Routes>
  );
};

export default App;
