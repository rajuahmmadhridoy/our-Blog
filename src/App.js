import { Routes, Route,BrowserRouter } from "react-router-dom";
import React, { Component }  from 'react';
import TopBar from "components/common/topBar/TopBar";
import Home from "pages/home/Home";
import Single from "pages/details/single/Single";
import Write from "pages/write/Write";
import Settings from "pages/settings/Settings";
import Login from "pages/login/Login";
import Register from "pages/register/Register";

function App() {
  const user = false;
  return (
      <>
        <TopBar />
        <BrowserRouter >
        <Routes>
        {/* <Route path="/" element={user ? <Home /> : <Register />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/login" element={user? <Home /> : <Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/write" element={<Write />} />
        <Route path="/register" element={user? <Home /> : <Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
