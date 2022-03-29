import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Homepage from "./pages/Homepage";
import Stakes from "./pages/Stakes";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/stakes" element={<Stakes />} />
        </Routes>
      </BrowserRouter>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
