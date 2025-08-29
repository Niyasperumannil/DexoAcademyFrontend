import React from 'react'
import Contact1 from '../Contact/Contact1.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactCards from './ContactCards/ContactCards.jsx';
import TradingBanner from '../../components/TradingBanner/TradingBanner.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Contact() {
  return (
    <>
      <Contact1 />
      <ContactForm />
      <ContactCards />
       <TradingBanner />
      <Banner />
      <Footer />
    </>
  )
}

export default Contact
