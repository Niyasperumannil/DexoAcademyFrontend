import React, { useState, useEffect } from "react";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Navbar from "../../components/Navbar/Navbar";
import TickerWithLogo from "../../components/TickerWithLogo/TickerWithLogo";
import Pipstick from "../../components/Pipstick/Pipstick";
import Banner from "../../components/Banner/Banner";
import TeamSection from "../../components/TeamSection/TeamSection";
import CommunitySection from "../../components/CommunitySection/CommunitySection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import TradingBanner from "../../components/TradingBanner/TradingBanner";
import Articles from "../../components/Articles/Articles";
import Footer from "../../components/Footer/Footer";
import "./Home.css"; // Optional CSS file if needed

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="cherpulassery-home-page">
          <Navbar />
          <TickerWithLogo />
          <Pipstick />
          <Banner />
          <TeamSection />
          <CommunitySection />
          <TestimonialsSection />
          <TradingBanner />
          <Articles />
          <Footer />
        </div>
      )}
    </>
  );
}
