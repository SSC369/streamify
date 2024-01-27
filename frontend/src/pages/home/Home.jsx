import React, { useEffect } from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Home = () => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwtToken");

  return (
    <>
      <Header />
      <div className="homePage">
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
      </div>
      <Footer />
    </>
  );
};

export default Home;
