import React from 'react'
import Blog1 from '../Blog/Blog1.jsx';
import BlogCards from './BlogCards/BlogCards.jsx';
import TradingBanner from '../../components/TradingBanner/TradingBanner.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Blog() {
  return (
    <>
      <Blog1 />
      <BlogCards />
      <TradingBanner />
      <Banner />
      <Footer />
    </>
  )
}

export default Blog
