import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
