// import Button from "@mui/material/Button";

const URL1 = 'https://purple-water-0475ec410.4.azurestaticapps.net'
const URL2 = 'https://msal-react-demo.vercel.app'
export const DeeplinkButton = () => {


//   function launchAppOnAndroidDevice(e , url,newtab) {
//     e.preventDefault();
//     window.location.replace(url);
//  }


 function launchAppOnAndroidDevice1(e , url,newtab) {
  e.preventDefault();
  window.open(url)
}


  return (
    <div style={{marginTop:40}}>
      <td onClick={()=> window.open(`${URL2}/test/nima111`, "_blank")}>text1</td>
      <td onClick={(e)=> launchAppOnAndroidDevice1(e,`${URL2}/test/nima111`)}>text2</td>
      <td onClick={(e)=> launchAppOnAndroidDevice1(e,`${URL2}`)}>text3</td>
      <td onClick={()=> window.open(`${URL2}/test/nima111`)}>text4</td>
      <td onClick={()=>  window.location.replace(`${URL2}/test/nima111`)}>text5</td>


      <td onClick={()=> window.open(`${URL1}/test/nima111`, "_blank")}>text1</td>
      <td onClick={(e)=> launchAppOnAndroidDevice1(e,`${URL1}/test/nima111`)}>text2</td>

       <div>
       {/* <Button color="inherit" onClick={(e) => launchAppOnAndroidDevice(e , `${URL1}/test/nima111`)} >
     Deep link to 1
    </Button>

    <Button color="inherit" onClick={(e) => launchAppOnAndroidDevice(e , `${URL1}/test/nima111`)} target="_blank">
    Deep link to 2
    </Button>

    <Button color="inherit" onClick={(e) => launchAppOnAndroidDevice(e , `${URL2}/test/nima111`)}>
    Deep link to 3
    </Button> */}

    {/* <a href="javascript: false" onClick={(e) => launchAppOnAndroidDevice(e , `${URL1}/test/nima111`)}>Deep link to 4</a>
    <a href="javascript: false" onClick={(e) => launchAppOnAndroidDevice(e , `${URL2}/test/nima111`)}>Deep link to 5</a>
    <a href="javascript: false" onClick={(e) => launchAppOnAndroidDevice(e , `${URL2}/test/nima111`)} target="_blank">Deep link to 6</a> */}


    {/* <a href={`${URL1}/test/nima111`} target="_blank" >aaaaaaaa</a> */}
        </div>
    </div>
  )
};
