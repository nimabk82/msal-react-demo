import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const DeeplinkButton = () => {


  function launchAppOnAndroidDevice() {
    const url = "https://purple-water-0475ec410.4.azurestaticapps.net/test/nima#Intent;scheme=https;package=com.msalrn;end";
    window.location.replace(url);
 }

  return (
    <div style={{marginTop:40}}>
       <div>
       <Button color="inherit" onClick={launchAppOnAndroidDevice}>
     Deep link to "https://purple-water-0475ec410.4.azurestaticapps.net/test/nima"
    </Button>
        </div>
    </div>
  )
};
