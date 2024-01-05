import { Link } from "react-router-dom";

export const DeeplinkButton = () => {


  function launchAppOnAndroidDevice() {
    const url = "https://purple-water-0475ec410.4.azurestaticapps.net/test/nima#Intent;scheme=https;package=com.msalrn;end";
    window.location.replace(url);
 }

  return (
    <div style={{marginTop:40}}>
    <div>
    <Link to="https://purple-water-0475ec410.4.azurestaticapps.net/test" >https://purple-water-0475ec410.4.azurestaticapps.net/test</Link>
    </div>
       <div>
    <Link to="https://purple-water-0475ec410.4.azurestaticapps.net/test/nima" >https://purple-water-0475ec410.4.azurestaticapps.net/test/nima</Link></div>
       <div>
       <button onclick={launchAppOnAndroidDevice}>Open App</button>
        </div>
    </div>
  )
};
