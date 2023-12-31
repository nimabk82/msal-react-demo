import Button from "@mui/material/Button";
import { useMsal} from "@azure/msal-react";

export const SignOutButton = () => {
  const { instance } = useMsal();

  //   const handleSignOut = async () => {
  //     const currentAccount = instance.getAccountByHomeId(
  //       "00000000-0000-0000-3991-70f8de83717b.9188040d-6c67-4c5b-b112-36a304b66dad"
  //     );
  //     // const logoutHint = currentAccount.idTokenClaims.login_hint;
  //     // await instance.logoutPopup({ logoutHint: logoutHint });

  //     await instance.logoutRedirect({
  //       account: currentAccount,
  //       postLogoutRedirectUri: "https://localhost:3002/logout",
  //     });
  //   };

  const handleSignOut = async () => {
    const logoutRequest = {
      account: instance.getActiveAccount(),
postLogoutRedirectUri: "https://purple-water-0475ec410.4.azurestaticapps.net/logout"}
console.log(logoutRequest);

    instance
      .logoutRedirect(logoutRequest)
  };

  return (
    <Button color="inherit" onClick={handleSignOut}>
      Sign out
    </Button>
  );
};
