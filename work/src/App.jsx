import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import { useSelector } from "react-redux";
import ADDFORM from "./components/ADDFORM";
import BuyList from "./components/BuyList";

const App = () => {
  return (
    <div>
      <ADDFORM />
      <BuyList />
    </div>
  );
};

export default App;
