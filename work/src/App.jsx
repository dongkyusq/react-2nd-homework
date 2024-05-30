import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={"지출페이지 입니다. "} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
