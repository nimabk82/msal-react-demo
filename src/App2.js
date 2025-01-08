import { useMsal } from "@azure/msal-react";

function App2() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect({
      scopes: ["openid", "profile", "email"],
    });
  };

  const handleTokenAcquisition = async () => {
    const account = instance.getActiveAccount();
    console.log(account);
    if (account) {
      const response = await instance.acquireTokenSilent({
        scopes: ["openid", "profile", "email"],
        account,
      });
      console.log("Token:", response.accessToken);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleTokenAcquisition}>Get Token</button>
    </div>
  );
}
export default App2;
