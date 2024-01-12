import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";

export const PageLayout = (props) => {
    return (
        <>
            <NavBar />
            <Typography variant="h5">
                <center>Welcome to APP 1</center>
            </Typography>
            <br/>
            <br/>
            {props.children}
        </>
    );
};