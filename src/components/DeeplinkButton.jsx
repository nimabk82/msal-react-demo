import Button from "@mui/material/Button";

const URL1 = 'https://purple-water-0475ec410.4.azurestaticapps.net'
const URL2 = 'https://msal-react-demo.vercel.app'
export const DeeplinkButton = () => {


  function launchAppOnAndroidDevice(url) {
    window.location.replace(url);
 }

  return (
    <div style={{marginTop:40}}>
       <div>
       <Button color="inherit" onClick={() => launchAppOnAndroidDevice(`${URL1}/test/nima111`)}>
     Deep link to "https://purple-water-0475ec410.4.azurestaticapps.net/test/nim
    </Button>

    <Button color="inherit" onClick={() => launchAppOnAndroidDevice(`${URL2}/test/nima111`)}>
     Deep link to "hhttps://msal-react-demo.vercel.app/test/nima111"
    </Button>
    <a href={`${URL1}/test/nima111`} >aaaaaaaa</a>
        </div>
    </div>
  )
};
