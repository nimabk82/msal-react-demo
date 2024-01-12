import Button from "@mui/material/Button";
import { useMsal } from "@azure/msal-react";

// const scope = `authorize`;
const scope = "user.read";

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleSignIn = () => {
    instance.loginRedirect({
      scopes: [scope],
    });
  };

  return (
    <Button color="inherit" onClick={handleSignIn}>
      Sign in
    </Button>
  );
};
