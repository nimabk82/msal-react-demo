import { Link } from "react-router-dom";

export const DeeplinkButton = () => {


  return (
    <div style={{marginTop:40}}>
    <div>
    <Link to="/profile" >/profile</Link>
    </div>
       <div>
    <Link to="/profile/nima" >/profile/nima</Link></div>
    <div>
    <Link to="/test/nima" >/test/nima</Link>
    </div>
    </div>
  );
};
