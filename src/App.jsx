import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollingText from "./components/ScrollingText";
import Slider from "./components/Slider";
import Dom from "./components/Dom";
import Combo from './components/Combo';
import Dom1 from "./components/Dom1";
import Dom2 from "./components/Dom2";
import Publisher from "./components/Publisher";
import Support from "./components/Support";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Register from "./components/Register";
import ContentSnapshot from "./components/ContentSnapshot";
import BannerSlider from "./components/BannerSlider";


function App() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Nội dung */}
        <div className="flex-1 bg-black text-white p-6">
          <ScrollingText />
          <BannerSlider />
          <Routes>
            <Route path="/" element={<ContentSnapshot />} />
            <Route path="/casino" element={<Dom />} />
            <Route path="/slots" element={<Slider />} />
            <Route path="/live" element={<Dom1 />} />
            <Route path="/table" element={<Dom2 />} />
            <Route path="/lottery" element={<Publisher />} />
            <Route path="/sports" element={<Support />} />
            {/* Additional routes for Combo shortcuts */}
            <Route path="/hot" element={<Slider />} />
            <Route path="/favorites" element={<Slider />} />
            <Route path="/poker" element={<Dom2 />} />
            <Route path="/esports" element={<Publisher />} />
            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/register" element={<Register />} />
            <Route path="/snapshot" element={<ContentSnapshot />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
