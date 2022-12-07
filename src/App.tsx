import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login';
import Main from './Components/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />}>
          <Route path=":User" element={<Login />} />
          <Route path=":Notice" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Route>
        
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
