import { Amplify, Auth } from "aws-amplify";
import Cookies from "js-cookie";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
const MY_COOKIE_MAX_AGE = 365;

Auth.configure({
    identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
})

const getApiKeyFromCookie = () => {
    let AC = Cookies.get();
    let result = '';

    for (let key in AC) {
        if (key.includes('idToken') && key.includes(AC['userID'])) {
            result = jwt_decode(AC[key]);
        }
    }
    result = result['custom:apikey'];
    return result;
}



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


        for (let key in user.storage) {
            if (key.includes("idToken") && key.includes(username)) {
                Cookies.set('idToken', user.storage[key])
            }
            if (typeof (user.storage[key]) === "string" && key.includes(username)) {
                Cookies.set(key, user.storage[key]);
            }
            if(key.includes('LastAuthUser')){
                Cookies.set(key, user.storage[key])
            }
        }
        window.location.replace("/dashboard")
        return {
            success: true,
            data: "success"
        }
    } catch (error) {
        console.log('error signing in', error);
        return {
            success: false,
            data: error
        };
    }
}




export async function fetchSummary() {
    const fullUrl = "https://api.latestk.com/api/admin";

    return axios.post(fullUrl, {},
        {
            params: {
                action: "getSummary"
            },
            headers: {
                "x-api-key": getApiKeyFromCookie()
            },
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.log(err);
        })
}


export async function fetchUsers(payload:object) {
    const fullUrl = "https://api.latestk.com/api/admin";

    return axios.post(fullUrl, payload,
        {
            params: {
                action: "searchUsers"
            },
            headers: {
                "x-api-key": getApiKeyFromCookie()
            },
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.log(err);
        })
}

