import Button from "@mui/material/Button";

export const DeeplinkButton = () => {


  function launchAppOnAndroidDevice() {
    const url = "https://purple-water-0475ec410.4.azurestaticapps.net/test/nima11111111";
    window.location.replace(url);
 }

  return (
    <div style={{marginTop:40}}>
       <div>
       <Button color="inherit" onClick={launchAppOnAndroidDevice}>
     Deep link to "https://purple-water-0475ec410.4.azurestaticapps.net/test/nima"
    </Button>

    <a href="https://purple-water-0475ec410.4.azurestaticapps.net/test/nima11111111">asdasda</a>
        </div>
    </div>
  )
};
