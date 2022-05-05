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
import Explore from "./pages/Explore"
import NftDetails from "./pages/NftDetails";
import JoinUs from "./pages/JoinUs";
import Magzine from "./pages/Magzine";
import Rank from "./pages/Rank";
import Profile from "./pages/Profile";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import ExploreLanding from "./pages/ExploreLanding";
import CreateNft from "./pages/CreateNft";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
             
          <Route path="/explore" element={<Explore />} />

          <Route path="/magzine" element={<Magzine />} />
          <Route path="/join-us" element={<JoinUs />} />

          <Route path="/news" element={<News />} />

          <Route path="/explore-landing" element={<ExploreLanding />} />


          <Route path="/news-details" element={<NewsDetails />} />

          <Route path="/create-nft" element={<CreateNft />} />
          
          <Route path="/profile" element={<Profile />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/details/:id" element={<NftDetails />} />
              
          <Route path="/stakes" element={<Stakes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
