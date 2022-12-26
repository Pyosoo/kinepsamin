import React from 'react';
import Cookies from "js-cookie";
import {
  useLocation
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ConsoleLogger } from '@aws-amplify/core';

interface sessionProps {
}

export function withSession<P>(WrappedComponent: React.ComponentType<P>) {
  const HocComponent = (props: P & sessionProps) => {
    const lc = useLocation();
    const ut = Cookies.get('idToken') ?? ''

    if(Cookies.get('isLogin') === "false" || !Cookies.get('isLogin')){
      window.location.replace('/login')
      return null;
    } else {
      let exp = jwt_decode(Cookies.get('idToken'))['exp'];
      let cur = new Date();
      let curT = cur.getTime();
      if(curT > exp * 1000){
        console.log("session expired")
        console.log(curT, exp*1000);
      } else {
        console.log("session alive")
        console.log(curT, exp*1000);
        if(lc.pathname === "/" || lc.pathname === "/login"){
          window.location.replace('/dashboard')
        }
      }
    }
    return <WrappedComponent {...props} currentPath={lc.pathname} idToken={jwt_decode(ut)} />;
  };

  return HocComponent;
}