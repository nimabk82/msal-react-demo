import { EventType, LogLevel, PublicClientApplication } from '@azure/msal-browser'
import { logger } from 'workbox-core/_private'
import { StorageService } from './storage'
// import { pca } from '..';

export function createPublicClientApplication() {
  const pca = new PublicClientApplication({
    auth: {
      clientId: "a777c7c4-09f2-4cf9-9605-96b82323b611",
      authority: "https://login.microsoftonline.com/bf475492-067f-4d6e-989f-776b97a19cd9",
      redirectUri: "http://localhost:3002",
    },
    cache: {
      cacheLocation: "sessionStorage", // Store tokens in session storage
      storeAuthStateInCookie: false,
    },
    system: {
      allowRedirectInIframe: true,
      loggerOptions: {
        loggerCallback: (level, message, containsPii) => {
          if (containsPii) {
            return;
          }
          switch (level) {
            case LogLevel.Error:
              console.error(message, "loggerCallback Error");
              return;
            case LogLevel.Info:
              console.info(message, "loggerCallback Info");
              return;
            case LogLevel.Verbose:
              console.debug(message, "loggerCallback Verbose");
              return;
            case LogLevel.Warning:
              console.warn(message, "loggerCallback Warning");
              return;
            default:
              return;
          }
        },
      },
    },
  })

  pca.addEventCallback((event: any) => {
    if (event?.eventType === EventType.LOGIN_SUCCESS) {
      pca.setActiveAccount(event?.payload?.account)
    }
  })

  return pca
}

// export const refreshToken = async () => {
//   const activeAccount = pca.getActiveAccount()

//   return await pca
//     .acquireTokenSilent({
//       account: activeAccount || undefined,
//       scopes: ['User.Read'],
//       forceRefresh: true,
//     })
//     .catch(async (err) => {
//       logger.error(err, 'refresh error')
//       StorageService.clearAll()
//       const logoutRequest = {
//         postLogoutRedirectUri: '/#/unAuth',
//       }
//       await pca.logout(logoutRequest)

//       return err
//     })
// }
