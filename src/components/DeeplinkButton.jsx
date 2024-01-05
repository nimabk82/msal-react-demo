import { Link } from "react-router-dom";

export const DeeplinkButton = () => {


  return (
    <div style={{marginTop:40}}>
    <div>
    <Link to="https://purple-water-0475ec410.4.azurestaticapps.net/test" >https://purple-water-0475ec410.4.azurestaticapps.net/test</Link>
    </div>
       <div>
    <Link to="https://purple-water-0475ec410.4.azurestaticapps.net/test/nima" >https://purple-water-0475ec410.4.azurestaticapps.net/test/nima</Link></div>
    </div>
  );
};
