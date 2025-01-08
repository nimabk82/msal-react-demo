import { ProfileData } from "../components/ProfileData";
import { useMsal, useMsalAuthentication } from "@azure/msal-react";
import { InteractionType, BrowserAuthError } from "@azure/msal-browser";
import { useState, useEffect } from "react";
import { fetchData } from "../fetch";
import { useNavigate } from "react-router-dom";

// const scope = `authorize`;
const scope = "user.read";

export const Profile = () => {
    const { result, error, login } = useMsalAuthentication(InteractionType.Popup, {
        scopes: [scope],
        claims: sessionStorage.getItem('claimsChallenge') 
            ? window.atob(sessionStorage.getItem('claimsChallenge')) : undefined
    });

    const { instance,accounts } = useMsal();
    const navigate = useNavigate();

    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        if (!!graphData) {
            return
        }

        if (!!error) {
            if (error instanceof BrowserAuthError) {
                login(InteractionType.Redirect, {
                    scopes: [scope]
                })
            }
            console.log(error);
        }

        if (result) {
            fetchData("https://graph.microsoft.com/v1.0/me", result.accessToken)
                .then(data => setGraphData(data))
                .catch(error => console.log(error));
        }
    }, [error, result, graphData, login]);


    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }
//    useEffect(() => {

//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get('token');

//     const activeAccount = instance.getActiveAccount()

//     // alert(JSON.stringify(activeAccount))
//     if (token) {
//       instance
//         .acquireTokenSilent({ scopes: ['User.Read'], loginHint: token })
//         .then(() => {
//           console.log("User authenticated with token from mobile.");

//           navigate('/'); // Redirect to intended page after login
//         })
//         .catch((error) => {
//             alert(JSON.stringify(error))

//           console.error("Token authentication failed:", error);
//         });
//     } else {

//       console.log("No token found in URL, proceed with default authentication.");
//     }
//   }, [instance, navigate]);

    return (
        <>
        <div>Profile</div>
            {graphData ? <ProfileData graphData={graphData} /> : null}
        </>
    )
}