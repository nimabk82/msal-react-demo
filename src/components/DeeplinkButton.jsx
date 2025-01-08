import * as React from 'react';
// import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const URL1 = 'http://localhost:3002/clientDetails/isDeeplinking/false/clientId/undefined/dob/1989%2F06%2F14/firstName/Nickolodium/lastName/Christopoplopolis'
const URL2 = 'http://localhost:3003' 
const URL3 = 'https://proud-forest-0106ba110.4.azurestaticapps.net'
const URL4 = 'http://localhost:3002/'

// const URL2 = 'https://msal-react-demo.vercel.app'

export const DeeplinkButton = () => {
  // const navigate = useNavigate()

  function createData(
    name,
    url,
    isWeb
  ) {
    return { name, url ,isWeb};
  }
  
  const rows = [
    createData('url1', `${URL1}`,true),
    createData('url2', `${ process.env.NODE_ENV === 'development' ? URL2 : URL3}/test/nima` ,false),
    createData('url3', `${ process.env.NODE_ENV === 'development' ? URL2 : URL3}/test?username=nima` ,true),
    createData('url4', `${ process.env.NODE_ENV === 'development' ? URL4 : URL4}/test?username=nima` ,true),
  ];
  

 function launchAppOnAndroidDevice(e , url,isWeb) {
  if(isWeb) {
    window.location.href = `${url}`;

    // navigate('/test/nima');
    return
  }
  e.preventDefault();
  window.open(url)
}


  return (
    <>
       <TableContainer component={Paper}>
       <a target='blank' href="http://localhost:3002/">Share this link to your webmaster</a>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={(e) => launchAppOnAndroidDevice(e , row.url , row.isWeb)}
              
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.url}</TableCell>
              <TableCell align="right">{row.isWeb ? 'web' : 'mobile'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
};
