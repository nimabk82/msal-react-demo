import Button from "@mui/material/Button";

const URL1 = 'https://purple-water-0475ec410.4.azurestaticapps.net'
// const URL2 = 'https://msal-react-demo.vercel.app'
export const DeeplinkButton = () => {


 function launchAppOnAndroidDevice(e , url) {
  e.preventDefault();
  window.open(url)
}


  return (
    <div style={{marginTop:40}}>
       <Button color="inherit" onClick={(e) => launchAppOnAndroidDevice(e , `${URL1}/test/nima`)} >
     Deep link to /test/nima
    </Button>

    <Button color="inherit" onClick={(e) => launchAppOnAndroidDevice(e , `${URL1}`)} >
     Deep link to app
    </Button>
    </div>
  )
};
