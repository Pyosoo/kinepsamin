import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import Login from './Components/Login/Login';
// import Dashboard from './Components/Dashboard/Dashboard';
// import User from './Components/User/User';
// import Notice from './Components/Notice/Notice';
// import LayoutComponent from './Components/LayoutComponent/LayoutComponent';
import Login from 'src/Components/Login/Login';
import Dashboard from 'src/Components/Dashboard/Dashboard';
import Notice from 'src/Components/Notice/Notice';
import User from 'src/Components/User/User';
import LayoutComponent from 'src/Components/LayoutComponent/LayoutComponent';

function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<LayoutComponent><Dashboard /></LayoutComponent>} />
            <Route path="/user" element={<LayoutComponent><User /></LayoutComponent>} />
            <Route path="/notice" element={<LayoutComponent><Notice /></LayoutComponent>} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
