import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login';
import Cookies from 'js-cookie';
import LayoutComponent from './Components/LayoutComponent';
import Dashboard from './Components/Dashboard';
import User from './Components/User';
import Notice from './Components/Notice';

function App() {

  console.log(typeof (Cookies.get('isLogin')))

  return (
    Cookies.get('isLogin') === "true" ?
      <BrowserRouter>
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/main" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/notice" element={<Notice />} />
          </Routes>
        </LayoutComponent>
      </BrowserRouter>
      :
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
