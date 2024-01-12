import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
// import { BrowserUtils } from "@azure/msal-browser";

export function Logout() {
    const { instance } = useMsal();

   

    useEffect(() => {
        // instance.logoutRedirect({
        //     account: instance.getActiveAccount(),
        //     onRedirectNavigate: () => !BrowserUtils.isInIframe()
        // })

        const handleSignOut = async () => {
            const logoutRequest = {
              account: instance.getActiveAccount(),
        postLogoutRedirectUri: "https://purple-water-0475ec410.4.azurestaticapps.net/logout"}
        console.log(logoutRequest);
        
            instance
              .logoutRedirect(logoutRequest)
          };
         handleSignOut()
    }, [ instance ]);

    return (
        <div>Logout</div>
    )
}
