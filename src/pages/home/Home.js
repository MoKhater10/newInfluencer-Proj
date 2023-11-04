import React from 'react';
import './home.css';
import Hero from '../../components/hero/Hero';
import WhatWeOffer from '../../components/what-we-offer/WhatWeOffer.jsx';
import StayInContact from '../../components/stay-in-contact/StayInContact';
import Footer from '../../components/footer/Footer';
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <WhatWeOffer />
      <StayInContact />
      <Footer />
    </div>
  );
};

export default Home;
