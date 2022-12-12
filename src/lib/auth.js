import { CognitoUserPool, CookieStorage } from "amazon-cognito-identity-js";
import * as Cookies from 'js-cookie';
import { Amplify, Auth } from 'aws-amplify';
const MY_COOKIE_MAX_AGE = 365;
export const domain = 'localhost';
const cookieData = { domain, path: '/', expires: MY_COOKIE_MAX_AGE, secure: false };
export const cookieStorage = new CookieStorage(cookieData);
export const userPoolData = {
  UserPoolId: process.env.NX_REACT_APP_COGNITO_USER_POOL_ID,
  ClientId: process.env.NX_REACT_APP_COGNITO_CLIENT_ID,
  Storage: cookieStorage,
};
export const AWS = require('aws-sdk');
export const getUserPool = new CognitoUserPool(userPoolData);
export const getUserPoolNew = () => {
  return new CognitoUserPool(userPoolData);
};




export const checkSession = async (callback) => {
  try {
    let userPool = new CognitoUserPool(userPoolData)
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser !== null) {
      return cognitoUser.getSession(async (err, session) => {
        if (session && session.isValid()) {
          // 토큰 만료 10분전에 refresh session 해주자.
          const now = Math.floor(new Date() / 1000);
          if (session.getAccessToken().getExpiration() - now <= 600) {
            return new Promise((resolve) => {
              console.log("세션 만료 10분전입니다. 새로 토큰을 교체합니다.")
              cognitoUser.refreshSession(session.getRefreshToken(), async (err, session) => {
                AWS.config.update({
                  credentials: new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: process.env.NX_REACT_APP_COGNITO_IDENTITY_POOL,
                    Logins: {
                      [`cognito-idp.${ process.env.NX_REACT_APP_AWS_REGION }.amazonaws.com/${ process.env.NX_REACT_APP_COGNITO_USER_POOL_ID }`]: session.getIdToken().getJwtToken(),
                    },
                  }),
                  region: process.env.NX_REACT_APP_AWS_REGION,
                });
                AWS.config.credentials.refresh((err)=> {
                  if (callback) {
                    callback();
                  }
                });
                Auth.currentSession();
                Auth.currentCredentials();
                Cookies.set('isLoginSuccess', session.isValid().toString(), { expires: MY_COOKIE_MAX_AGE });
                resolve({ isLoggedIn: session.isValid(), session });
              });
            });
          } else {
            console.log("아직 세션이 만료되기 10분전이 아닙니다.")
            return new Promise((resolve) => {
              AWS.config.update({
                credentials: new AWS.CognitoIdentityCredentials({
                  IdentityPoolId: process.env.NX_REACT_APP_COGNITO_IDENTITY_POOL,
                  Logins: {
                    [`cognito-idp.${ process.env.NX_REACT_APP_AWS_REGION }.amazonaws.com/${ process.env.NX_REACT_APP_COGNITO_USER_POOL_ID }`]: session.getIdToken().getJwtToken(),
                  },
                }),
                region: process.env.NX_REACT_APP_AWS_REGION,
              });
              AWS.config.credentials.refresh((err) => {
                if (callback) {
                  callback();
                }
              });
              Auth.currentSession();
              Auth.currentCredentials();
              Cookies.set('isLoginSuccess', session.isValid().toString(), { expires: MY_COOKIE_MAX_AGE });
              // cacheToken(session);
              resolve({ isLoggedIn: session.isValid(), session });
            });
          }
        } else {
          console.log("session is not available")
          return await cognitoUser.refreshSession(session.getRefreshToken(), async (err, session) => {
            return new Promise((resolve) => {
              AWS.config.update({
                credentials: new AWS.CognitoIdentityCredentials({
                  IdentityPoolId: process.env.NX_REACT_APP_COGNITO_IDENTITY_POOL,
                  Logins: {
                    [`cognito-idp.${ process.env.NX_REACT_APP_AWS_REGION }.amazonaws.com/${ process.env.NX_REACT_APP_COGNITO_USER_POOL_ID }`]: session.getIdToken().getJwtToken(),
                  },
                }),
                region: process.env.NX_REACT_APP_AWS_REGION,
              });
              AWS.config.credentials.refresh((err)=> {
                if (callback) {
                  callback();
                }
              });
              Auth.currentSession();
              Auth.currentCredentials();
              Cookies.set('isLoginSuccess', session.isValid().toString(), { expires: MY_COOKIE_MAX_AGE });
              resolve({ isLoggedIn: session.isValid().toString(), session });
            });
          });
        }
      });
    } else {
      return new Promise((resolve) => {
        Cookies.set('isLoginSuccess', 'false', { expires: MY_COOKIE_MAX_AGE });
        resolve({ isLoggedIn: false });
      });
    }
  } catch (err) {
    return new Promise((resolve) => {
      Cookies.set('isLoginSuccess', 'false', { expires: MY_COOKIE_MAX_AGE });
      resolve({ isLoggedIn: false });
    });
  }
};

export const refreshSession = (callback) => {
  const cognitoUser = getUserPool.getCurrentUser();
  cognitoUser.getSession(async (err, session) => {
    cognitoUser.refreshSession(session.getRefreshToken(), async (err, session) => {
      return new Promise((resolve) => {
        AWS.config.update({
          credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: process.env.NX_REACT_APP_COGNITO_IDENTITY_POOL,
            Logins: {
              [`cognito-idp.${ process.env.NX_REACT_APP_AWS_REGION }.amazonaws.com/${ process.env.NX_REACT_APP_COGNITO_USER_POOL_ID }`]: session.getIdToken().getJwtToken(),
            },
          }),
          region: process.env.NX_REACT_APP_AWS_REGION,
        });

        AWS.config.credentials.refresh((err)=> {
          if (callback) {
            callback();
          }
        });
        console.log("refresh token")
        Cookies.set('isLoginSuccess', session.isValid().toString(), { expires: MY_COOKIE_MAX_AGE });
        resolve({ isLoggedIn: session.isValid().toString(), session });
      });
    });
  });
};
