import Typography from "@mui/material/Typography";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { DeeplinkButton } from "../components/DeeplinkButton";

export const Home = () => {
    return (
        <>
            <AuthenticatedTemplate>
                <Typography variant="h6">You are signed-in. app1</Typography>
                <DeeplinkButton/>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <Typography variant="h6">Please sign-in to see your profile information.</Typography>
            </UnauthenticatedTemplate>
           
        </>
    );
}