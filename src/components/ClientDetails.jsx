import React from "react";
import { useParams } from "react-router-dom";
var CryptoJS = require("crypto-js");

function decryptData(encryptedData, key) {
    const bytes  = CryptoJS.AES.decrypt(encryptedData, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }


export const ClientDetails = () => {

    const params = useParams();
    const [data , setData] = React.useState(null)
    
   
    React.useEffect(() => {
        const key = '123123'; // The same key as used in the React Native app
        // const queryParams = new URLSearchParams(window.location.search);
        // const encryptedUserId = queryParams.get('user');
        
        setData({
            clientId : decryptData(params?.clientId, key),
            dob : decryptData(params?.dob, key),
            firstname : decryptData(params?.firstName, key),
            lastname : decryptData(params?.lastName, key),
            isDeeplinking : decryptData(params?.isDeeplinking, key)
   
        })
        
        
            // alert(JSON.stringify())
    }, [params])
    


// var originalText = bytes.toString(CryptoJS.enc.Utf8);

    // if( !data ) {
    //     return <><p>loading</p></>
    // }

    console.log(data)

    return (
        <>
           <span>{data?.clientId}<br />
             {data?.dob}<br />
            {data?.firstname}<br />
           {data?.lastname}<br /></span>
        </>
    );
};

