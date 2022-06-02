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
import Explore from "./pages/Explore";
import NftDetails from "./pages/NftDetails";
import JoinUs from "./pages/JoinUs";
import Magzine from "./pages/Magzine";
import Rank from "./pages/Rank";
import Profile from "./pages/Profile";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import ExploreLanding from "./pages/ExploreLanding";
import Dashboard from "./pages/creators/Dashboard";
import CreateStake from "./pages/CreateStake";
import AdminDashboard from "./pages/admin/AdminDashboard";
import TransactionPage from "./pages/TransactionPage";
import Farm from "./pages/Farm";
import CreateNft from "./pages/CreateNft";
import NFTList from "./pages/admin/NFTList";
import Artist from "./pages/Artist";
import TransactionList from "./pages/admin/TransactionList";
import Aboutus from "./pages/Aboutus";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminRoute from "./components/AdminRoute";

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/explore" element={<Explore />} />

          <Route path="/magzine" element={<Magzine />} />
          <Route path="/join-us" element={<JoinUs />} />

          <Route path="/news" element={<News />} />

          <Route path="/transactions" element={<TransactionPage />} />

          <Route path="/explore-landing" element={<ExploreLanding />} />

          <Route path="/news-details" element={<NewsDetails />} />

          <Route path="/create-nft" element={<CreateNft />} />

          <Route path="/farm" element={<Farm />} />

          <Route path="/about" element={<Aboutus />} />

          <Route
            path="/nft-list"
            element={
              <AdminRoute>
                <NFTList />
              </AdminRoute>
            }
          />

          <Route path="/transaction-list" element={<TransactionList />} />

          <Route path="/create-stake" element={<CreateStake />} />

          <Route
            path="/admin-dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/details/:id" element={<NftDetails />} />

          <Route path="/stakes" element={<Stakes />} />

          <Route path="/models" element={<Artist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
