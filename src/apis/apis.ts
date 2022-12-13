import { Amplify, Auth } from "aws-amplify";
import Cookies from "js-cookie";
import jwt_decode from 'jwt-decode';
const MY_COOKIE_MAX_AGE = 365;

Auth.configure({
    identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
})

export async function loginFlow(username: string, password: string) {
    try {
        const user = await Auth.signIn(username, password);

        let allCookies = Cookies.get();
        for (let key in allCookies) {
            Cookies.remove(key);
        }

        Cookies.set('isLogin', 'true', { expires: MY_COOKIE_MAX_AGE });
        Cookies.set('userAttr', user.attributes)
        Cookies.set('userID', username)
        // Cookies.set('userID', 'moneyguide')


        for (let key in user.storage) {
            if (key.includes("idToken") && key.includes(username)) {
                Cookies.set('userToken', user.storage[key])
            }
            if (typeof (user.storage[key]) === "string" && key.includes(username)) {
                Cookies.set(key, user.storage[key]);
            }
            if(key.includes('LastAuthUser')){
                Cookies.set(key, user.storage[key])
            }
        }
        window.location.replace("/dashboard")
    } catch (error) {
        alert(error)
        console.log('error signing in', error);
    }
}


