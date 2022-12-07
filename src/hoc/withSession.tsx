import React from 'react';
import Cookies from "js-cookie";

interface sessionProps {
  
}

export function withSession<P>(WrappedComponent: React.ComponentType<P>) {
  const HocComponent = (props: P & sessionProps) => {
    console.log(Cookies.get('isLogin'))

    if(Cookies.get('isLogin') === "false" || !Cookies.get('isLogin')){
      window.location.replace('/login')
      return null;
    }
    return <WrappedComponent {...props} />;
  };

  return HocComponent;
}