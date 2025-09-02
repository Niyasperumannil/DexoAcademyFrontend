import React from 'react'
import Navbar1 from "../../pages/Aboutus/Navbar1.jsx";
import ImageRow from './ImageRow/ImageRow.jsx';
import AboutSection from './AboutSection/AboutSection.jsx';
import StatsSection from './StatsSection/StatsSection.jsx';
import MissionVision from './MissionVision/MissionVision.jsx';
import TradingBanner from '../../components/TradingBanner/TradingBanner.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import MapEmbed from './MapEmbed/MapEmbed.jsx';

function Aboutus() {
  return (
    <>
      <Navbar1 />
      <ImageRow />
      <AboutSection />
      <StatsSection />
      <MissionVision />
      <TradingBanner />
      <Banner />
      <MapEmbed />
      <Footer />

    </>
  )
}

export default Aboutus
