import "./App.css";
import Home from "./screens/home";
import Sandbox from "./screens/sandbox";
import Map from "./screens/map";
import Info from "./screens/info";
import About from "./screens/about";
import Battle from "./screens/battle";
import { Routes, Route } from "react-router-dom";

//map about info and battle should be protected unless you are logged in

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to World Domination!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/map:country" element={<Map />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/sandbox" element={<Sandbox />} />
      </Routes>
    </div>
  );
}
