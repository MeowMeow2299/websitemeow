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
          <div className="main-content-scaled">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <img
                    src="/1.png"
                    alt="Banner"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '12px',
                      objectFit: 'contain'
                    }}
                  />
                  <div className="bg-[#1a1a1a] min-h-screen p-4">
                    <ScrollingText />
                  </div>
                  <div>
                    <Slider />
                  </div>
                  <div>
                    <Combo />
                  </div>
                  <div>
                    <Dom />
                  </div>
                  <div>
                    <Dom1 />
                  </div>
                  <div>
                    <Dom2 />
                  </div>
                  <div>
                    <Publisher />
                  </div>
                  <div>
                    <Support />
                  </div>
                  <div>
                    <Footer />
                  </div>
                </>
              }
            />
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
