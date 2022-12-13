import React from 'react';
import Cookies from "js-cookie";
import {
  useLocation
} from "react-router-dom";
import jwt_decode from "jwt-decode";

interface sessionProps {
}

export function withSession<P>(WrappedComponent: React.ComponentType<P>) {
  const HocComponent = (props: P & sessionProps) => {
    const lc = useLocation();
    const ut = Cookies.get('userToken') ?? ''

    if(Cookies.get('isLogin') === "false" || !Cookies.get('isLogin')){
      window.location.replace('/login')
      return null;
    }
    return <WrappedComponent {...props} currentPath={lc.pathname} userToken={jwt_decode(ut)} />;
  };

  return HocComponent;
}